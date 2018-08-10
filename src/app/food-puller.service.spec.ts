import { TestBed, inject } from '@angular/core/testing';

import { FoodPullerService } from './food-puller.service';

describe('FoodPullerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodPullerService]
    });
  });

  it('should be created', inject([FoodPullerService], (service: FoodPullerService) => {
    expect(service).toBeTruthy();
  }));
});
