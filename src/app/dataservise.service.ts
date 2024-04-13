import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { usersdata } from './user-interface';
@Injectable({
  providedIn: 'root'
})
export class DataserviseService implements InMemoryDbService{

  constructor() { }
  createDb(){
    let users :usersdata[] = [
      {id:1 , firstname:"pravin",lastname:"satpute",dob:'2000-05-11',email:"wa@gmail.com",phone:435355454,company:"infosys"},
         {id:2 , firstname:"pravcfin",lastname:"satputfce",dob:'2054-05-11',email:"vcvcv@gmail.com",phone:888888,company:"tcs"},
    ]
    return {users}
  }
}
