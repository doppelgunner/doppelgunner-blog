import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../services';

@Component({
  selector: 'dg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert = false;
  success = false;
  alertMessage = "";
  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.initForm();
  }

  ngOnInit() {
  }

  private initForm() {
    let loginEmail = '';
    let loginPassword = '';

    this.loginForm = this.formBuilder.group({
      email: [loginEmail, [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      password: [loginPassword, Validators.required],
    });
  }

  onLogin() {
    this.authService.signIn(
        this.loginForm.value, 
        () => {
          this.alertHide();
          this.success = true;
          console.log("successfully logged in");
        }, 
        (message: string) => {
          this.alertShow(message);
        });
  }

  alertHide() {
    this.alert = false;
    this.alertMessage = "";
  }

  alertShow(message: string) {
    this.alertMessage = message;
    this.alert = true;
    this.loginForm.get('password').reset();
  }

}
