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

  }

  onLogin(email: string, ev: any): void {
    //appel serveur
    this.user = { login: email, name: email };
    console.log(this.user);
  }

  onLogout(): void {
    this.user = null;
  }

}
