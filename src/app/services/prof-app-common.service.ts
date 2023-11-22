import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ProfAppCommonService {

  constructor(private http:HttpClient) { }

  validateLoginURL:string ='http://localhost:3000/auth/login';
  validateUserLogin(data){
    return this.http.post(this.validateLoginURL,data);
  }
}
