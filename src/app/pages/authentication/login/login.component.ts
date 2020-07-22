import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  private passwd: ElementRef;

  user: any;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('USER'));
  }

  onLogin(email: string, ev: any): void {
    //appel serveur
    this.user = { login: email, name: email };
    console.log(this.user);
    sessionStorage.setItem('USER', JSON.stringify(this.user));

  }

  onLogout(): void {
    this.user = null;
    sessionStorage.removeItem('USER');
  }

}
