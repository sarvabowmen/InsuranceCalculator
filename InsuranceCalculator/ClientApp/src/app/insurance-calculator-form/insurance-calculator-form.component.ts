import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-insurance-calculator',
  templateUrl: './insurance-calculator-form.component.html',
})
export class InsuranceCalucluatorForm {
    options: FormGroup;
    constructor(fb: FormBuilder) {
        this.options = fb.group({

        });
    }

}
