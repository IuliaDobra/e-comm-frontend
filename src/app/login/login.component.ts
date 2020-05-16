import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

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
    const { username, password } = this.loginForm.value;

    if (username && password) {
      this.authService.login(username, password)
        .then(() => {
            this.router.navigateByUrl('/dashboard');
          }).catch(error => {
          console.log(error.message);
        }
      );
    }
  }

  signUp() {
    this.router.navigateByUrl('/sign-up');
  }
}
