import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Role} from './role.enum';
import {User} from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const {username, password} = this.loginForm.value;

    if (username && password) {
      this.authService.login(username, password)
        .subscribe((user: User) => {
          if (user.role === Role.SELLER) {
            this.router.navigateByUrl('/stores');
          } else if ( user.role === Role.BUYER ) {
            this.router.navigateByUrl('/products');
          }
        });
    }
  }

  signUp() {
    this.router.navigateByUrl('/sign-up');
  }
}
