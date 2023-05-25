import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import io from 'socket.io-client'
const SOCKET_ENDPOINT ="localhost:3000"
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {
socket= io('localhost:3000')
  msg!: string;
  message!: string;


  ngOnInit(){
    this.socketConnection()
  }
socketConnection(){
  console.log('990')
  this.socket = io(SOCKET_ENDPOINT)
  console.log(this.socket)
  this.socket.on('connection',async(socket)=>{
    this.socket.on('recice-msg', async(message) => {
      console.log(message,'0',socket)
    
    });
  })
}
sendMsg(){
  console.log('88',this.msg)
  this.message =this.msg
  this.socket.emit('user-data',this.message)
  const element =document.createElement('li')
  element.innerHTML =this.message
  document.getElementById('list')?.appendChild(element)
  this.message=''

}



}
