import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurance-calculator',
  templateUrl: './insurance-calculator-form.component.html',
})
export class InsuranceCalucluatorForm implements OnInit{
    insuranceForm: FormGroup;
    submitted = false;

    floatLabelControl = new FormControl('auto');

    constructor(private fb: FormBuilder) {
        
    }
    ngOnInit(){
      this.insuranceForm = this.fb.group({
        name: ['', Validators.required],
        age: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        occupation: ['', Validators.required],
        sumAssured: ['', Validators.required]
      },{
        floatLabel: this.floatLabelControl,
      });

    }

    get insuranceFormControl() {
      return this.insuranceForm.controls;
    }
    
    onSubmit(){
      if (this.insuranceForm.valid) {
        alert('Form Submitted succesfully!!!\n Check the values in browser console.');
        console.table(this.insuranceForm.value);
      }
    }

}
