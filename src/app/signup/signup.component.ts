import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';
import {error} from 'util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  signUp() {
    console.log(this.registerForm.value);
    const { username, password, role } = this.registerForm.value;

    this.authService.signUp(username, password, role)
      .then(() => this.router.navigateByUrl('/login'))
      .catch(err => console.log(err.message));
  }

}
