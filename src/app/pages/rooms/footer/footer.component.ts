import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../../services/room.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    rooms: Array<any> = null;
    //private serv:RoomService;

    constructor(private serv: RoomService) {
        //this.serv = serv;
    }

    ngOnInit(): void {
        //console.log('start ngOnint');
        /*this.rooms = [
            { name: 'Pégase', image: 'Pegase.jpg' },
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Uranie', image: 'Uranie.jpg' }
        ];*/
        //this.rooms = this.serv.getAllRooms();
        //console.log('end ngOnint');

        this.serv.getAllRooms().subscribe(
            data => {
                this.rooms = data;
            }
        );
    }
}
