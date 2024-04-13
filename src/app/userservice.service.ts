import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usersdata } from './user-interface';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
SERVER_URL: string = "http://localhost:4200/api/"
  constructor(private http:HttpClient) { }
  getuser(){
      return this.http.get(this.SERVER_URL+"users")
  }
  getusers(userId:number){
     return this.http.get(`${this.SERVER_URL}users/${userId}`)
  }
  adduser(user:usersdata){
return  this.http.post(`${this.SERVER_URL}users`,user)
  }
    updateuser(user:usersdata){
return  this.http.put(`${this.SERVER_URL}users/${user.id}`,user)
  }
  deleteuser(userId:number){
      return this.http.delete(`${this.SERVER_URL}users/${userId}`)
  }
}
