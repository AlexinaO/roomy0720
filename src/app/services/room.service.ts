import { Injectable } from '@angular/core';
import { RoomModel } from '../models/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoomService {

    constructor(private http: HttpClient) { }

    getAllRooms(): Observable<Array<RoomModel>> {
        /*return [
            { name: 'Pégase', image: 'Pegase.jpg' },
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Uranie', image: 'Uranie.jpg' }
        ];*/

        let obs = this.http.get<Array<RoomModel>>(environment.urlRooms);
        //obs.subscribe(this.toto);
        /*obs.subscribe(data => {
            console.log('data', data);
            return data;
        });*/
        return obs;

        //console.log('return null');
        //return null;
    }

    getRoomById(id: number): Observable<RoomModel> {
        return this.http.get<RoomModel>(`${environment.urlRooms}/${id}`);
    }

    /*toto(data:any){
        console.log(data);
    }*/
}