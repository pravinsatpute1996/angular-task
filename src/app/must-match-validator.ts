import {FormGroup } from '@angular/forms';
export function mustMatch(password:string ,cpassword:string){
  return (formgroup:FormGroup)=>{
    const passwordcontrol = formgroup.controls[password];
    const confirmpasswordcontrol = formgroup.controls[cpassword];

    if(passwordcontrol.value !== confirmpasswordcontrol.value){
      confirmpasswordcontrol.setErrors({mustmatch:true})
    }
    else{
       confirmpasswordcontrol.setErrors(null)
    }
  }
}