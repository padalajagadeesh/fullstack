 import { Component } from '@angular/core';
import { ServerService } from '../server.service';
 //import { ChatModule, Message, User, Action, ExecuteActionEvent, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  sendInput: any | undefined;
  storeData: any=[];
  data: any =[];

constructor(private signUpService: ServerService ){}


  logOut(){
    this.signUpService.logOut()
    console.log('14')
  }
sendMsg($event:any){
  console.log('hiii')
  this.storeData.push(this.sendInput)
  this.storeData.forEach((v:any)=>{
    this.data =v
  })
  this.sendInput=''
  console.log(this.data,'00000')
}

emoji($event:any){
console.log($event,'9999999')

}
}
