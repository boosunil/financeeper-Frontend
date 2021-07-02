import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from "./core/services/auth.service";
import { PostsComponent } from './posts/posts.component';
import { AuthGuard } from "./core/guards/auth.guard";
import { TokenInterceptorService } from "./core/services/token-interceptor.service";
import { ApiService } from "./core/services/api.service";
import { UserPostsComponent } from './user-posts/user-posts.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent, PostsComponent, UserPostsComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  // providers: [AuthGuard,ApiService],
  providers: [AuthService,AuthGuard,ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
