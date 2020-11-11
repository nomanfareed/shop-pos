import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // isAuthenticated: boolean = false;
  onAuthChange: EventEmitter<boolean> = new EventEmitter();
  constructor() { }
  login() {
    // this.isAuthenticated = true;
    this.onAuthChange.emit(true);
    localStorage.setItem('token', 'true');
    localStorage.setItem('token', 'false');

  }
  logout() {
    // this.isAuthenticated = false;
    this.onAuthChange.emit(false);
    localStorage.removeItem('token');
  }
}
