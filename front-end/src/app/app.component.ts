import { Component } from '@angular/core';
import { ServerService } from './server.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
 
  imageUrl: any;
  dataArray: any;
  loginMainValue: any;
constructor(private signUpService: ServerService,private http:HttpClient){}
  ngOnInit(){
    console.log('888888888')
  // this.dataArray = localStorage.getItem('signUp*&') || []
  // let arr = JSON.parse(this.dataArray)
  //   console.log(this.dataArray,'99')
  //   arr.forEach((v:any)=>{
  //     this.imageUrl=v.signImg 
  //     console.log(this.imageUrl,'00')
  //   })
 // payload ela sendcheyali
  // const sampleObj = {name: 'Tharun', content:'Hello', }
// oka get cll kooda create cheddam
    this.imageUrl= this.signUpService.imgUrlOut()
    this.loginMainValue=this.signUpService.logInValueFromLogin()
    console.log(this.imageUrl,'99',this.loginMainValue)
  let url ='http://192.168.10.25:3000/api/sendmessage';
  //  this.http.post(url, sampleObj).subscribe((v)=>{ 
  //   console.log(v,'99')
  //  })

   let url2 ='http://192.168.10.25:3000/api/getmessages';
   this.http.get(url2).subscribe((v)=>{ 
    console.log(v,'99')
   })
  }
// get caall rayu kk
}
