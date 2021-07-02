import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  loginUser() {
    const formData = this.loginForm.value
    const payload = {
      email: formData.email,
      password: formData.password
    }
    this.authService.loginUser(payload).subscribe(
      (resp: any) => {
        console.log(resp)
        localStorage.setItem("token", resp.data.token)
        this.router.navigate(["/posts"]);
      }, (error) => {
        console.log(error)
      }
    )
  }

}
