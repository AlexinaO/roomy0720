import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomModel } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styles: [
  ]
})
export class AddRoomComponent implements OnInit {

  formRoom = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    seatCount: new FormControl('10'),
    image: new FormControl('', [Validators.required])
  });

  pictures: Array<any> = [
    { file: 'Pegase.jpg', name: 'Pegase' },
    { file: 'Calliope.jpg', name: 'Calliope' },
    { file: 'Thalie.jpg', name: 'Thalie' }
  ];

  constructor(private serv: RoomService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.formRoom);
    if (this.formRoom.valid) {
      const room: RoomModel = this.formRoom.value as RoomModel;
      this.serv.insert(room).subscribe(
        data => {
          this.snack.open(`La salle ${data.name} est enregistrée avec l'id ${data.id}`, 'OK', { duration: 4000, verticalPosition: 'top' });
        }
      );
    }
  }
}
