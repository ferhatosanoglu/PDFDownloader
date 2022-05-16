import { Component, OnInit } from '@angular/core';
import { ConverterPdfService } from 'src/utils/services/converter-pdf/converter-pdf.service';

declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _convrterServices: ConverterPdfService
  ) { }
  url: string = 'https://';
  result!: any;
  async ngOnInit() {
  }
  handleKeyup(event: any): void {
    this.url = event.target.value;
  }
  async convert() {

    this.result = await this._convrterServices.convert({
      "Parameters": [
        {
          "Name": "Url",
          "Value": this.url
        },
        {
          "Name": "StoreFile",
          "Value": true
        }
      ]
    })
    FileSaver.saveAs(this.result?.Files[0].Url, this.result?.Files[0].FileName);
  }



}
