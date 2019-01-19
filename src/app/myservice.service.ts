import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

@Injectable()
export class MyserviceService {

  constructor(private _http: HttpClient, public jwtHelper: JwtHelperService) { }


   public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    if( token){
    return !this.jwtHelper.isTokenExpired(token.toString())}
    else{
      return false;
    }
  }
  login(body:any){
    return this._http.post('http://localhost:4000/login', body,{
      observe:'body'
    });
  }

  getUserName() {
    return this._http.get('http://localhost:4000/getusername', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

}