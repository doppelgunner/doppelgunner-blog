import { Injectable } from '@angular/core';
import { User } from '../models';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor() { }

  signIn(user: User, succCallback: Function, errCallback: Function) {
    firebase.auth().signInWithEmailAndPassword(user.email,user.password).then(
      () => {
        succCallback();
        this.isAuthenticated();
      }
    ).catch(
      err => errCallback(err.name + ": " + err.message)
    );

  }

  logout() {
    firebase.auth().signOut();
  }

  isAuthenticated(): boolean {
    var user = firebase.auth().currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }

}
