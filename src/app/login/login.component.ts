import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

 loginForms=new FormGroup({
  email:new FormControl('', [Validators.required, Validators.email]),
  password:new FormControl('', [Validators.required])
 })
  

// loginForms: FormGroup;
constructor() {
  // this.loginForms = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required])
  // });
}

onSubmit() {
  if(this.loginForms.valid) {
    console.log(this._v());
  }
}
_v() {
  return this.loginForms.value;
}





}



