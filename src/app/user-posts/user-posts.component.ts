import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';


@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  posts : any

  constructor(
     private apiService : ApiService
  ) { }

  ngOnInit() {
    this.getPosts()
  }

    getPosts(){
      this.apiService.getUserPosts().subscribe(
        (resp) =>{
          
            this.posts = resp["data"]
            console.log(this.posts)
          
        },(error) =>{
          console.log(error)
        }
      )
    }

}
