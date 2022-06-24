import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.scss']
})
export class RegistrComponent implements OnInit {

  loginForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  })
  constructor(public authenticationService: AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  onClick() {
    if(!this.loginForm.invalid){
      this.authenticationService.setData(this.loginForm.value.firstname, this.loginForm.value.lastname, this.loginForm.value.email);
      this.authenticationService.login = true
      this.router.navigate(['/shopinglist']);
    }
    else{
      alert("Please fill in all fields.")
    }
  }
}
