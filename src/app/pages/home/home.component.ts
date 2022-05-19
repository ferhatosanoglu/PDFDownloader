import { Component, Input, OnChanges, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ConverterPdfService } from 'src/utils/services/converter-pdf/converter-pdf.service';
import { NgxSpinnerService } from "ngx-spinner";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private spinner: NgxSpinnerService
  ) {

  }

  fontData = [
    "Arial, sans-serif",
    "Verdana, sans-serif",
    "Helvetica, sans-serif",
    "Tahoma, sans-serif",
    "'Trebuchet MS', sans-serif",
    "'Times New Roman', serif",
    "Georgia, serif",
    "Garamond,serif",
    "'Courier New', monospace",
    "'Brush Script MT', cursive"
  ]

  fontSize: number = 16;
  fontWeight: string = 'bold'
  fontFamily: string = "Arial, sans-serif";

  onFontSize(event: any) { // without type info
    this.fontSize = event.target.value;
  }
  selectedFontFamily(newValue: string) {
    this.fontFamily = newValue;
  }
  changeFontWeight(newValue: any) {
    this.fontWeight = newValue.target.value;
  }
  convert() {
    this.spinner.show()
    try {
      let data: any = document.getElementById('content');

      html2canvas(data).then(canvas => {

        let docWidth = 208;
        let docHeight = canvas.height * docWidth / canvas.width;

        const contentDataURL = canvas.toDataURL('image/png')
        let doc = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)

        doc.save('exportPdf.pdf');
      });
    } catch (err) {
      console.error(err)
    }
    this.spinner.hide();
  }
}
