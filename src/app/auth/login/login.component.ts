import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Login } from '../../entity/login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrm: FormGroup
  message = null;
  constructor(private fb: FormBuilder, private _Auth: AuthService, private _Router: Router) { }

  ngOnInit() {
    this.loginFrm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required
      ]
    });
  }

  submit = (e) => {
    if (this.loginFrm.valid) {
      const form: Login = this.loginFrm.value;
      const res: any = this._Auth.isPermitted(form);
      if (res.flag) {
        this._Router.navigate(['welcome'])
      } else {
        this.message = res.message;
      }
    } else {
      this.message = 'Please provide your credentials to login.';
    }
  }

}