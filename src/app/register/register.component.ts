import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private authService : AuthService,
    private formBuilder: FormBuilder,
    private router : Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          username : [null,[Validators.required]],
          email : [null,[Validators.required,Validators.email]],
          password : [null,[Validators.required]]
      })
  }

  registerUser(){
    const formData = this.registerForm.value
    const payload = {
      username : formData.username,
      email : formData.email,
      password : formData.password
    }

    this.authService.registerUser(payload).subscribe(
      (resp:any) =>{
        console.log(resp)
        this.router.navigate(['/login'])
      },(error) =>{
        console.log(error)
      }
    )
  }

}
