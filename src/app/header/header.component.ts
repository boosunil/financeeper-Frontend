import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  // logOut(){
  //   this.authService.logout()
  //   this.router.navigate(['/login'])
    
  // }

  logOut(){
    this.authService.logout().subscribe(
      (resp)=>{
        console.log(resp)
        localStorage.removeItem('token')
        this.router.navigate(['/login'])
      },(error) =>{
        console.log(error)
      }
    )
  }

}
