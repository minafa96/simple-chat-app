import { Injectable } from '@angular/core';
import io from '../../../node_modules/socket.io-client/dist/socket.io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public socket;
  constructor() {
    this.socket = new io('http://localhost:3500', {transports: [ 'websocket']});
    this.socket.on('connect', () => {
      console.log('connect');
    });
    this.socket.on('disconnect', () => {
      console.log('disconnect');
    });
  }
}
