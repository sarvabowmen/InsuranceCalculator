import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InsuranceRequest } from '../models/insuranceRequest';
import { InsuranceService } from '../services/insurance-service.service';
import { InsuranceFormValidatorService } from '../services/insurance-form-validator.service';
@Component({
  selector: 'app-insurance-calculator',
  templateUrl: './insurance-calculator-form.component.html',
})
export class InsuranceCalucluatorForm implements OnInit{
    insuranceForm: FormGroup;
    submitted = false;
    deathPremium: number = 0;

    floatLabelControl = new FormControl('auto');

    constructor(private fb: FormBuilder, private insuranceService: InsuranceService,
      private customValidator: InsuranceFormValidatorService) {
        
    }
    ngOnInit(){
      this.insuranceForm = this.fb.group({
        name: ['', Validators.required],
        age: ['', [Validators.required, this.customValidator.ageValidator.bind(this)]],
        dateOfBirth: ['', [Validators.required, this.customValidator.dateValidator.bind(this)]],
        occupation: ['', Validators.required],
        sumAssured: ['', Validators.required]
      },{
        floatLabel: this.floatLabelControl,
        validators: this.customValidator.ValidateAgeAndDateOfBirth('age', 'dateOfBirth'),
      });

    }

    get insuranceFormControl() {
      return this.insuranceForm.controls;
    }
    
    onSubmit(){
      if (this.insuranceForm.valid) {
        this.submitted = true;
        alert('Form Submitted succesfully!!!\n Check the values in browser console.');
        let insuranceRequest: InsuranceRequest =  { age: this.insuranceForm.value.age,
        sumAssured: this.insuranceForm.value.sumAssured,
        occupation:  this.insuranceForm.value.occupation
        }
        this.insuranceService.calculateSumAssured(
          insuranceRequest
        ).subscribe(res=> {
          this.insuranceService.deathPremiumAmount = this.deathPremium = res;
          console.log(res);
        }, (err)=> {
          this.submitted = false;
        })
        console.table(this.insuranceForm.value);
      }
    }

    OnReset(){
      this.insuranceForm.markAsPristine();
      this.insuranceForm.reset(this.insuranceForm.value);
    }

}
