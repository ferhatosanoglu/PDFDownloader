import { TestBed } from '@angular/core/testing';

import { ConverterPdfService } from './converter-pdf.service';

describe('ConverterPdfService', () => {
  let service: ConverterPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConverterPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
