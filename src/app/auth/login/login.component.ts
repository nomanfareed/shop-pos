import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }
  fg: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  })
  ngOnInit(): void {
  }
  login() {
    if (this.fg.valid) {
      this.authService.login();
      this.router.navigate(['home']);
    }
    else {
      this.fg.markAllAsTouched();
    }
  }
  hasError(control: string, errorName: string) {
    return this.fg.get(control).hasError(errorName);
  }
}
