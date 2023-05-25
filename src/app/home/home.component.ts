import { Component } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
imageUrl: any;

constructor(private signUpService:ServerService){}
ngOnInit(){
  this.imageUrl= this.signUpService.imgUrlOut()
  console.log(this.imageUrl,'99')
  
}
  
}
