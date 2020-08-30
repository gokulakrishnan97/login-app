import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  signUp(body){
    let opts: any = {
      observe: 'response'
    }
    return this.http.post(this.url + 'users', body, opts);
  }

  signin(body){
    let opts: any = {
      responseType: 'text'
    }
    return this.http.post(this.url + 'auth', body, opts);
  }
}
