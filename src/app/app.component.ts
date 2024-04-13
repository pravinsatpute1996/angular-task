import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { usersdata } from './user-interface';
import { emailValidator } from './email-validator.directive';
import { UserserviceService } from './userservice.service';
import { Dboperations } from './db-operations';

interface IUser {
  name: string;
  phone: number;
  email: string;
  password: string;
  gender: boolean;
  company: string;
  // date: string;
  dob: string;
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
  buttontxt:string="submit"
  dbops:Dboperations = 1;
  constructor(private myservise:UserserviceService) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.getalluser();
     this.buttontxt = "submit";
   this.dbops = Dboperations.create;
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
        dob: new FormControl(this.user.dob, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
       gender: new FormControl(this.user.gender, [
        Validators.required,

      ]),
      // nickname: new FormControl(this.user.number, [
      //   Validators.maxLength(10),
      // ]),
      company: new FormControl(this.user.company, [
        Validators.maxLength(10),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
       phone: new FormControl(this.user.phone, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),

       ]),
      //   date: new FormControl(this.user.date, [
      //   Validators.required,

      // ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(15),
      ]),
    });
  }

  get name() {
    return this.reactiveForm.get('name')!;
  }

  get phone() {
    return this.reactiveForm.get('phone')!;
  }

  get email() {
    return this.reactiveForm.get('email')!;
  }

  get password() {
    return this.reactiveForm.get('password')!;
  }
get company() {
    return this.reactiveForm.get('company')!;
}
// get date() {
//     return this.reactiveForm.get('date')!;
// }
  get gender() {
    return this.reactiveForm.get('gender')!;
  }
    get dob() {
    return this.reactiveForm.get('dob')!;
  }
  public validate(): void {
    console.log(this.reactiveForm.value)
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
    console.info('phone:', this.user.phone);
    console.info('Email:', this.user.email);
    console.info('Password:', this.user.password);


    switch(this.dbops){
      case Dboperations.create:
       this.myservise.adduser(this.reactiveForm.value).subscribe(res=>{
        this.getalluser();
         this.reset();
       })
      break;
      case Dboperations.update:
        this.myservise.updateuser(this.reactiveForm.value).subscribe(res=>{
        this.getalluser();
         this.reset();
       })
      break;
    }


  }
  public reset(): void{
      this.reactiveForm.reset();
         this.buttontxt = "submit";
   this.dbops = Dboperations.create;
}
getalluser(){
  this.myservise.getuser().subscribe(res => {
    console.log("Fffffff")
    console.log(res);
    this.userss=res
  })
}
  Edit(userId:number) {
    this.buttontxt = "update";
   this.dbops = Dboperations.update;

   let User=this.userss.find((u:usersdata)=>u.id==userId);
   this.reactiveForm.patchValue(User)
}
delet(userssId:number){
this.myservise.deleteuser(userssId).subscribe(res => {
  this.getalluser()
})
}
  setfromstate() {
    
}
}
