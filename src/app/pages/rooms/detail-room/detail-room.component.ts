import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Observable } from 'rxjs';
import { RoomModel } from 'src/app/models/room.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styles: [
  ]
})
export class DetailRoomComponent implements OnInit {

  obsRoom$: Observable<RoomModel>;

  constructor(private serv: RoomService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params.id;

    this.obsRoom$ = this.serv.getRoomById(id);

  }

}
