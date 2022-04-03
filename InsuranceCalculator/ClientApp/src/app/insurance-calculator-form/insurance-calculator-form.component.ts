import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurance-calculator',
  templateUrl: './insurance-calculator-form.component.html',
})
export class InsuranceCalucluatorForm {
    options: FormGroup;
    floatLabelControl = new FormControl('auto');

    constructor(fb: FormBuilder) {
        this.options = fb.group({
          name: ['', Validators.required],
          age: ['', Validators.required],
          dateOfBirth: ['', Validators.required],
          occupation: ['', Validators.required],
          sumAssured: ['', Validators.required]
        },{
          floatLabel: this.floatLabelControl,
        });
    }

}
