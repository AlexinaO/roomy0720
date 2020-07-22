import { Routes } from '@angular/router';
import { ListRoomComponent } from './pages/rooms/list-room/list-room.component';
import { AddRoomComponent } from './pages/rooms/add-room/add-room.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NotFoundComponent } from './pages/home/not-found/not-found.component';
import { DetailRoomComponent } from './pages/rooms/detail-room/detail-room.component';
//import { LoginComponent } from './pages/authentication/login/login.component';

export const APP_ROUTES: Routes = [
    /*{ path: 'rooms/list', component: ListRoomComponent },
    { path: 'rooms/add', component: AddRoomComponent },*/
    {
        path: 'rooms', children: [
            { path: 'list', component: ListRoomComponent },
            { path: 'add', component: AddRoomComponent },
            { path: 'detail/:id', component: DetailRoomComponent }
        ]
    },

    /*{
        path: 'auth', children: [
            { path: 'login', component: LoginComponent },
        ]
    },*/
    { path: 'auth', loadChildren: () => import('./pages/authentication/authentication.module').then(x => x.AuthenticationModule) },

    { path: 'home', component: HomeComponent },
    { path: 'notfound', component: NotFoundComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'notfound' }
];