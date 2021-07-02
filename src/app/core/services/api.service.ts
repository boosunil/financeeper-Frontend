import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    uploadJson(data) {
        return this.http.post(`${environment.apiUrl}/api/json/add/`, data)
}

getUserPosts(){
    return this.http.get(`${environment.apiUrl}/api/json/get/`)
}


}