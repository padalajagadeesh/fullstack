import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import io from 'socket.io-client'
const SOCKET_ENDPOINT ="localhost:3000"

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
socket= io('localhost:3000')
  msg!: string;
  message!: string;
  sendInput: any | undefined;

  ngOnInit(){
    this.socketConnection()
    
    this.socket.on('recice-msg',(message) => {
      console.log(message,'0')
 
})
this.socket.on('data1',async (value) =>{
  console.log(value,'5555')
})
  }
socketConnection(){
  console.log('990')
  this.socket = io(SOCKET_ENDPOINT)
  console.log(this.socket)
 
    this.socket.on('recice-msg', async(message) => {
      console.log(message,'0')
      if(message){
        const element =document.createElement('li')
    element.innerHTML =message
    document.getElementById('list1')?.appendChild(element)
      }
 
  })
}
sendMsg(event:any){
  console.log('88',this.msg)
  this.message =event
  this.socket.emit('user-data',this.message)
  const element =document.createElement('li')
  element.innerHTML =this.message
  document.getElementById('list')?.appendChild(element)
  this.message=''

}
// addHero(event:any){
// console.log(event)
// console.log('88',this.msg)
// this.message =event
// this.socket.emit('user-data',this.message)
// const element =document.createElement('li')
// element.innerHTML =this.message
// document.getElementById('list')?.appendChild(element)
// this.message=''
// }

emoji($event:any){
  console.log($event,'9999999')
  
  }

  sendMsg1($event:any){

  }
}
