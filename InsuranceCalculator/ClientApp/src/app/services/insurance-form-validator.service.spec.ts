import { TestBed } from '@angular/core/testing';

import { InsuranceFormValidatorService } from './insurance-form-validator.service';

describe('InsuranceFormValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsuranceFormValidatorService = TestBed.get(InsuranceFormValidatorService);
    expect(service).toBeTruthy();
  });
});
