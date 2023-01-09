import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/models/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {
  cardForm!: FormGroup
  showSpinner: boolean =false;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<CardModalComponent>,
    private cardService: CardsService,
    private _snackBar: MatSnackBar,
    
    @Inject(MAT_DIALOG_DATA) public data:Card) { }
  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: [this.data?.name||'', Validators.maxLength(50)],
      title: [this.data?.title||'', [Validators.required, Validators.maxLength(255)]],
      phone: [this.data?.phone||'', [Validators.required, Validators.maxLength(20)]],
      email: [this.data?.email||'', [Validators.email, Validators.maxLength(50)]],
      address: [this.data?.address||'', Validators.maxLength(255)],
    })
  }
  addCard() {
    this.showSpinner=true
    this.cardService.addCard(this.cardForm.value)
      .subscribe((res: any) => {
        this.getSuccess(res||'kartvizit eklendi')
      });
     
  }
  updateCard(){
    this.showSpinner=true
    this.cardService.updateCard(this.cardForm.value,this.data.id)
    .subscribe((res:any)=>{
      this.getSuccess(res||'kartvizit güncellendi')

      })
  }
  deleteCard(){
    this.showSpinner=true
    this.cardService.deleteCard(this.data.id).subscribe((res:any)=>{
     this.getSuccess(res||'kartvizit silindi')

    })

  }
  getSuccess(message:string){

    this._snackBar.open(message, '',{
      duration:4000,
    })
    this.cardService.getCards()
    this.showSpinner=false
    this.dialogRef.close()
  }

}
