import { Component, EventEmitter, Output } from '@angular/core';
import { ServerService } from '../server.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: any;
  loginPassowrd: any;
  working: boolean = false;
  emailValidate: boolean | undefined;
  loginForm: any;
  value: string | null | undefined;
  data: any;
  duplicateData: any;
  dummyData: [] | undefined;
  dataArray: any=[];
  arr:any
  imageUrl: any;
  // @Output() loginData = new EventEmitter();
  constructor(private signUpService: ServerService, private route: Router, private fb: FormBuilder) {

  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      loginPassowrd: ['', Validators.required],
      loginEmail: ['', [Validators.required, Validators.email]],
    })
    this.dataArray = localStorage.getItem('signUp*&') || []
  console.log(this.dataArray,'88')
  this.arr = JSON.parse(this.dataArray)

  }
  login() {
      this.arr.forEach((v:any)=>{
        if( v.email == this.email && v.passowrd == this.loginPassowrd ){
          console.log('sucee')
          this.working =true
          setTimeout(()=>{
            this.route.navigate(['home'])
          },3000)
        }
        console.log(v,'12')
      })
    //  //let value=  localStorage.getItem('siginUP')

    //  console.log(localStorage.getItem('siginUP'),'000')
    console.log(this.loginForm.controls.value, '00')
    // this.signUpService.getSignUser().subscribe((v) => {
    //   console.log(v, '45',this.loginForm.controls?.value?.loginEmail)
    //   this.duplicateData = v
    //   this.duplicateData.forEach((val: any) => {
    //     console.log(val.email === this.loginForm.controls?.value?.loginEmail, '22', val.passowrd === this.loginForm.controls?.value?.loginPassowrd)
    //     if (val.email === this.loginForm.controls?.value?.loginEmail && val.passowrd === this.loginForm.controls?.value?.loginPassowrd) {
    //       console.log('sucee')
    //       this.working = true
    //       setTimeout(() => {
    //         this.route.navigate(['menu'])
    //       }, 3000)
    //     }
    //     console.log(v, '12')
    //   })
    // })

// this.loginData.emit(this.loginForm)
  this.signUpService.logInValueFromLogin()
  }


  forgotPassword(){
    this.arr.forEach((v:any)=>{
      console.log(v,this.email)
      if( v.email === this.email){
          alert(v.passowrd)
      }
      console.log(v,'12')
    })
  }
}


