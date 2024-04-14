import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usersdata } from './user-interface';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  SERVER_URL: string = "https://localhost:4200/api/";
  constructor(private http:HttpClient) { }
  getuser(){
      return this.http.get(this.SERVER_URL+"users")
  };
  getusers(userId:number){
     return this.http.get(`${this.SERVER_URL}users/${userId}`)
  };
  adduser(users:usersdata){
return  this.http.post(`${this.SERVER_URL}users`,users)
  };
    updateuser(users:usersdata){
    return  this.http.put<usersdata>(`${this.SERVER_URL}users/${users.id}`,users)
  };
  deleteuser(userId:number){
      return this.http.delete(`${this.SERVER_URL}users/${userId}`)
  };
}
