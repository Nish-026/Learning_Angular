import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { RoomList } from '../rooms';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent implements OnInit {
  
  @Input() rooms: RoomList[]=[]
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor(){

  }
  ngOnInit(): void{

  }
  selectRoom(room: RoomList){
      this.selectedRoom.emit(room);
  }
  
}
