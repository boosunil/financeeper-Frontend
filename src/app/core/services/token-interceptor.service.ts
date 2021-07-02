import { HttpInterceptor} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
    constructor(private injector: Injector) { }

    intercept(req, next) {
        let authService = this.injector.get(AuthService)
        console.log(req.url,"url")
        if (req.url == "http://127.0.0.1:8000/api/users/login/"){
            return next.handle(req)
        }
        else if (req.url == "http://127.0.0.1:8000/api/users/add/"){
            return next.handle(req)
        }
        let tokenreq = req.clone({
            setHeaders: {
                Authorization: `Token ${authService.getToken()}`
            }
        })
        return next.handle(tokenreq)
    }
}