import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store-pos';
  isAuthenticated: boolean = false;
  options: FormGroup;

  constructor(private authService: AuthService, private router: Router,private fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
    const token = localStorage.getItem('token');
    if (token) {
      this.isAuthenticated = true;
      if (this.isAuthenticated) {
        // this.router.navigate(['home']);
      }
    }
    this.authService.onAuthChange.subscribe(res => {
      this.isAuthenticated = res;
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['.']);
  }
}
