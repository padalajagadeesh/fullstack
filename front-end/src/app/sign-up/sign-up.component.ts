import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  data: Array<any> = [];
  dummyData: any = [];
  arr: Array<any> = [];
  id: any;
  fileToUpload: any;
  imageUrl: any;
  constructor(private fb: FormBuilder, private signUpService: ServerService) {
  }
  dataArray: any = []
  passowrdMatch: boolean = false;
  signupForm: any;
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      passowrd: ['', Validators.required],
      ConformPassowrd: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      signImg: ['', [Validators.required]]
    })
    console.log(localStorage.getItem('signUp'), '88')
  }

  onSubmit() {
    console.log(this.signupForm.controls.status, '099',this.signupForm)

    // this.arr.forEach((val:any)=> console.log(val,'val'))
    if (this.signupForm.controls.passowrd.value === this.signupForm.controls.ConformPassowrd.value) {
      this.passowrdMatch = true
      console.log('siginUP', this.signupForm.value, this.signupForm.value.passowrd)
      if (this.signupForm.status === "VALID") {
        console.log('999')
        this.signUpService.signMethod(this.signupForm.value)
        this.signUpService.imgUrl(this.imageUrl)
        console.log(this.data, '55', this.signupForm.value)
        
      }
      //  this.yes()
      this.signUpService.signUser(this.signupForm.value).subscribe((v) => {
        console.log(v.id, '44')
        this.id = v.id
      })
    }
   
  }
  yes() {
    this.signUpService.signUser(this.signupForm.value).subscribe((v) => {
      console.log(v.id, '44')
      this.id = v.id
    })
    console.log('998', this.id)
    // delete the data from backEnd................................
    this.signUpService.deleteSignData(this.id).subscribe((v) => {
    })
    this.data.push(this.signupForm.value)
    //console.log(this.data,'55')
    // const data=this.signUpService.getExistingdata()
    console.log(this.data, '12',this.signupForm)
    // this.data.forEach((v:any)=>{
    //console.log(v.passowrd,'222')
    // })
  }

  uploadFile($event:any){
    console.log( $event.target.files[0],'88')
    let reader = new FileReader(); 
    let file = $event.target.files[0]
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result;
     console.log(this.imageUrl)
    }
  localStorage.setItem('IMGURL', this.imageUrl)
  }
}
