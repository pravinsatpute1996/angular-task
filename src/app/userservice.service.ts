import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
SERVER_URL: string = "http://localhost:4200/api/"
  constructor(private http:HttpClient) { }
  getuser(){
      return this.http.get(this.SERVER_URL+"users")
  }
}
