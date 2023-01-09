
import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;
  users: any = [];
  dialog: any;
  constructor(private fb: FormBuilder, 
    private router: Router, private commserv: CommonService , 
    
    ) { }

  ngOnInit(): void {
    this.login = this.fb.group({
    password: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    })

    this.commserv.getUser().subscribe((data: any) => {
      this.users = data;
      
    })
  }

  loginSubmit(data: any) {
    if (data.password) {
      if (this.users.some((user: any) => user.password === data.password && user.email === data.email)) {
        localStorage.setItem("isLoggedIn", "true")
        this.router.navigate(["home"])
      } else {
        localStorage.clear();
      }
    }
  }

  goToSignup() : void {
    this.router.navigate(["register"])
  
  }
 
  
  

}