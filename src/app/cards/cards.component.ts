
import { Component, ElementRef,  OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CardsService } from '../services/cards.service';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

 @ViewChild('scroll')
  scroll!: ElementRef;

  constructor(public dialog: MatDialog,
    public cardService: CardsService) {

  }

  ngOnInit(): void {
    this.cardService.getCards()
  }

  addCardModal(): void {
    this.dialog.open
    (CardModalComponent, {
      width: '400px'
    })
  }

  }

