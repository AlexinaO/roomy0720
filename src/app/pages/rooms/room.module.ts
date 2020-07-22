import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from 'src/app/material.module';
import { ListRoomComponent } from './list-room/list-room.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { DetailRoomComponent } from './detail-room/detail-room.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        FooterComponent,
        ListRoomComponent,
        AddRoomComponent,
        DetailRoomComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    exports: [
        FooterComponent
    ],
    providers: [],
})
export class RoomModule { }