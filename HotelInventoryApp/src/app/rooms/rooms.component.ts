import { ChangeDetectionStrategy, Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from './rooms';
import { Room } from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, OnChanges {
  hotelName = 'Leela';
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 20,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [];
  constructor() {}
  ngOnInit(): void {
    this.roomList= [
      {
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, TV, Free Wi-Fi, Bathroom, Kitchen',
        price: 500,
        photos: 'na',
        checkinTime: new Date('11-NOV-2022'),
        checkoutTime: new Date('13-NOV-2022'),
      },
      {
        roomType: 'private Room',
        amenities: 'Air Conditioner, TV, Free Wi-Fi, Bathroom, Kitchen',
        price: 400,
        photos: 'na',
        checkinTime: new Date('11-NOV-2022'),
        checkoutTime: new Date('13-NOV-2022'),
      },
    ];
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  numberofRooms = 10;
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom(room:RoomList){
    console.log(room);
  }
  addRoom(){
    const room: RoomList={
      roomType:"Deluxe",
      amenities:"Ac",
      price:4500,
      photos:"c",
      checkinTime:new Date("7-nov-2013"),
      checkoutTime: new Date("8-nov-2013")
    }
    this.roomList= [...this.roomList,room];
  }
}
