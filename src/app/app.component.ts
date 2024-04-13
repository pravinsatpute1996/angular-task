import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { emailValidator } from './email-validator.directive';
import { UserserviceService } from './userservice.service';

interface IUser {
  name: string;
  number: number;
  email: string;
  password: string;
  gender: boolean;
  company: string;
  date: Date;
  datefield: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userss:any=[]
  reactiveForm!: FormGroup;
  user: IUser;

  constructor(private myservise:UserserviceService) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.getalluser();
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
        datefield: new FormControl(this.user.datefield, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
       gender: new FormControl(this.user.gender, [
        Validators.required,

      ]),
      nickname: new FormControl(this.user.number, [
        Validators.maxLength(10),
      ]),
      company: new FormControl(this.user.company, [
        Validators.maxLength(10),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
       number: new FormControl(this.user.number, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),

       ]),
        date: new FormControl(this.user.date, [
        Validators.required,

      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(15),
      ]),
    });
  }

  get name() {
    return this.reactiveForm.get('name')!;
  }

  get number() {
    return this.reactiveForm.get('number')!;
  }

  get email() {
    return this.reactiveForm.get('email')!;
  }

  get password() {
    return this.reactiveForm.get('password')!;
  }
get company() {
    return this.reactiveForm.get('company')!;
}get date() {
    return this.reactiveForm.get('date')!;
}
  get gender() {
    return this.reactiveForm.get('gender')!;
  }
    get datefield() {
    return this.reactiveForm.get('datefield')!;
  }
  public validate(): void {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }

    this.user = this.reactiveForm.value;

    console.info('company:', this.user.company);
    console.info('Name:', this.user.name);
    console.info('Gender:', this.user.gender);
    console.info('Number:', this.user.number);
    console.info('Email:', this.user.email);
    console.info('Password:', this.user.password);
  }
  public reset(): void{
      this.reactiveForm.reset()
}
getalluser(){
  this.myservise.getuser().subscribe(res => {
    console.log("Fffffff")
    console.log(res);
    this.userss=res
  })
}
}
