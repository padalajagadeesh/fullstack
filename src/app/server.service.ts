import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignData } from '../assets/shared/signData'

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  data:any=[]
  signUpDeatils: any=[];
  newImg: any;
  loginValue: boolean = false;
  constructor(private route:Router,private https: HttpClient) { 

  }
// localhost
  apiURL = 'http://localhost:3000';

   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  signMethod(deatils:object){
    console.log(deatils,'123')
  //this.data =  JSON.parse(JSON.stringify(localStorage.getItem('signUp')))
    this.data.push(deatils)
    console.log(this.data,'147')
  localStorage.setItem('signUp*&', JSON.stringify(this.data))
  console.log(this.data,'26::::')
  console.log(this.signUpDeatils,'18',deatils)
  setTimeout(()=>{
    this.route.navigate(['/login'])
  },4000)
  
   // localStorage.setItem('signUp',this.signUpDeatils)
  }
  getExistingdata(){
    const data=localStorage.getItem('siginUP')
    
    console.log(data,'66')
    // if(data?.length){ 
    //   return JSON.parse(data)
    // }
    
  }
  signUser(SignData: any): Observable<SignData> {
    console.log(SignData,'77')
    return this.https
      .post<SignData>(
        this.apiURL + '/posts',
        JSON.stringify(SignData),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
//get the sign data
getSignUser(): Observable<SignData> {
  return this.https
  .get<SignData>(this.apiURL + '/posts')
}

deleteSignData(id:any): Observable<SignData>{
  console.log(id,'999')
  return this.https
  .delete<SignData>(this.apiURL + '/posts/' + id, this.httpOptions)
}



imgUrl(data:any){
console.log(data,'71')
this.newImg =data
}

imgUrlOut(){
  return this.newImg
}

   // Error handling
   handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  logOut(){
    setTimeout(()=>{
      this.route.navigate(['/login'])
    },2000)
  }

  logInValueFromLogin(){
this.loginValue =true
console.log(this.loginValue,'999999')
  }
}
