import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginF: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(false)
  })
  account: any;
  public user: string = 'admin';
  public pass: string = 'admin';
  constructor(
    private loginService: LoginService,
    private route: Router) { }
  ngOnInit(): void {
    this.loginService.login().subscribe((res: any) => {
      this.account = res
    })
  }
  onLogin(): void {
    let userName = this.loginF.value.userName;
    let pass = this.loginF.value.password;
    if (this.loginF.valid) {

      if (this.user = userName && this.pass == pass) {

        this.route.navigateByUrl('admin')
      } else {

        alert(" incorrect username or password")
      }
    }



  }
}
