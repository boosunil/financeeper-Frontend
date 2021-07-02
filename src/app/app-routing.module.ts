import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";
import { LoginComponent } from "./login/login.component";
import { PostsComponent } from "./posts/posts.component";
import { RegisterComponent } from "./register/register.component";
import { UserPostsComponent } from "./user-posts/user-posts.component";



const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard]
  },{
    path : 'user-posts',
    component : UserPostsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
