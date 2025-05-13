import { Injectable } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class ToPdfService {

  constructor() { }

  
  convertToPDF(title = "myPDF") {
    const data = document.getElementById('content') as HTMLElement;
    
  
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      const imgWidth = 210.058;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      let position = 0;
  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save(title+'.pdf'); // Generated PDF
    });
  }

}
