import { Injectable } from '@angular/core';
import { Login } from './entity/login';
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() { }

  isPermitted = (login: Login) => {
    let res = {};
    const users: [] = JSON.parse(localStorage.getItem('users'));
    if (!users) {
      res = {
        flag: false,
        message: 'Username is not available'
      };
    } else {
      let obj = users.find((e: any) => {
        return (login.username == e.username || login.username == e.email) && login.password == e.password;
      });
      if (obj) {
        res = {
          flag: true,
          message: 'Success'
        }
      } else {
        res = {
          flag: false,
          message: 'Invalid username or password'
        }
      }
    }
    return res;
  }
}