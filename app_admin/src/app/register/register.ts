import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  public formError: string = '';
  submitted = false;
  credentials = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private router: Router,
    private authenticationService: Authentication,
  ) {}

  ngOnInit(): void {}

  public onRegisterSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password || !this.credentials.name) {
      this.formError = 'All fields are required, please try again';
    } else if (this.credentials.password != this.credentials.confirmPassword) {
      this.formError = "Passwords don't match!";
    } else {
      this.doRegister();
    }
  }

  private doRegister(): void {
    let newUser = {
      name: this.credentials.name,
      email: this.credentials.email,
    } as User;
    // console.log('LoginComponent::doLogin');
    // console.log(this.credentials);
    this.authenticationService.register(newUser, this.credentials.password);
    if (this.authenticationService.isLoggedIn()) {
      // console.log('Router::Direct');
      this.router.navigate(['']);
    } else {
      this.formError = 'Unknown error occurred! Please try again.';
      //   var timer = setTimeout(() => {
      //     if (this.authenticationService.isLoggedIn()) {
      //       // console.log('Router::Pause');
      //       this.router.navigate(['']);
      //     } else {
      //       this.formError = 'Invalid credentials! Please try again.';
      //     }
      //   }, 3000);
    }
  }
}
