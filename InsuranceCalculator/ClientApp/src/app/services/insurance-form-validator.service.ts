import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class InsuranceFormValidatorService {

  constructor() {

   }

   ageValidator(): ValidatorFn{
    return( control: AbstractControl ): { [key:string]: any } => {
      if(!control.value)
      {
        return null;
      }
      if(control.value < 0 && control.value > 100)
      {
        return { invalidAge: true };
      }
    };
   }

   dateValidator(): ValidatorFn{
    return( control: AbstractControl ): { [key:string]: any } => {
      if(!control.value)
      {
        return null;
      }
      var date =  new Date(control.value);
      if(date.getFullYear() < 1900 && date.getFullYear() > 2022)
      {
        return { invalidDate: true };
      }
    };
   }

   ValidateAgeAndDateOfBirth(age: string, dateOfBirth: string) {
    return (formGroup: FormGroup) => {
      const ageControl = formGroup.controls.age;
      const dateOfBirthControl = formGroup.controls.dateOfBirth;

      if (!ageControl || !dateOfBirthControl) {
        return null;
      }
      var dob = new Date(dateOfBirthControl.value);
      //calculate month difference from current date in time
      var month_diff = Date.now() - dob.getTime();
      //convert the calculated difference in date format
      var age_dt = new Date(month_diff);  
      //extract year from date    
      var year = age_dt.getUTCFullYear();
      //now calculate the age of the user
      var age = Math.abs(year - 1970);
      if(age != ageControl.value){
        ageControl.setErrors({ ageMismatch: true });
      } else {
        ageControl.setErrors(null);
      }
    }
  }

}
