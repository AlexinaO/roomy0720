import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from 'src/app/material.module';
import { ListRoomComponent } from './list-room/list-room.component';
import { AddRoomComponent } from './add-room/add-room.component';

@NgModule({
    declarations: [
        FooterComponent,
        ListRoomComponent,
        AddRoomComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        FooterComponent
    ],
    providers: [],
})
export class RoomModule { }