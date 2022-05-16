import { Injectable } from '@angular/core';
import { ApiFetchService } from '../api-fetch/api-fetch.service';


@Injectable({
  providedIn: 'root'
})
export class ConverterPdfService {

  constructor(
    private _apiFetchService: ApiFetchService,
  ) { }
  async convert(values: object) {
    console.log('asda', values);
    return await this._apiFetchService.requestAsync(
      'POST',
      'pdf?Secret=ug2pOHQeqiUWPfBP',
      values
    );
  }
}
