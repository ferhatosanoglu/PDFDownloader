import { Component, OnInit } from '@angular/core';
import { ConverterPdfService } from 'src/utils/services/converter-pdf/converter-pdf.service';
import { NgxSpinnerService } from "ngx-spinner";

declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
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
    this.spinner.show();
    try {
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
    } catch (err) {
      console.error(err)
    }
    this.spinner.hide()
  }



}
