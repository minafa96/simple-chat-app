import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SocketService} from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  chats: Imsg[] = [];

  constructor(private socket: SocketService ) { }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.socket.socket.off('sending message');
    this.socket.socket.off('new message');
  }

  ngOnInit(): void {
    this.socket.socket.on('new message', mssg => {
      this.chats.push(mssg.message) ;
      console.log(this.chats);
    });

  }

  onSubmit(msg) {
    this.socket.socket.emit('sending message', msg.value);
  }

}
export interface Imsg {
  message: string;
}
