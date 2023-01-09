import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register: any = FormGroup
  id: number = 4;

  constructor(private fb: FormBuilder, private router: Router, private commServ: CommonService) { }

  ngOnInit(): void {

    this.register = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    })
  }
  registerSubmit(data: any) {

    let dataToPass = {
      password: data.password,
      email: data.email,
      id: this.id++
    }
    this.commServ.addUser(dataToPass).subscribe((data: any) => {
      console.log(data)
    })
  }
  goToLogin() {
   this.router.navigate(['login'])
  }

}
