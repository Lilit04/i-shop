import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  constructor(public authenticationService: AuthenticationService) { }

  public password : string = "password"

  ngOnInit(): void {
  }

  onClick() {
    if(!this.loginForm.invalid){
      if(this.loginForm.value.password.length >= 6 ){
          this.authenticationService.SignIn(this.loginForm.value.username, this.loginForm.value.password);
      } else {
        alert("Password must contain at least 6 characters.");
      }
    }
  }
  setshowpassword(){
    if(this.password === "password"){
      this.password = "text"
    }
    else{
      this.password = "password"
    }
  }

}
