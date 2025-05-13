import { Component } from '@angular/core';
import { ToPdfService } from '../to-pdf.service';
@Component({
  selector: 'app-temp2',
  standalone: true,
  imports: [],
  templateUrl: './temp2.component.html',
  styleUrl: './temp2.component.css'
})



export class Temp2Component {
  // Injectez ChangeDetectorRef dans le constructeur
  constructor(private toPDF : ToPdfService) {}

  title = "SACHA DUBOIS";

  onTitleInput(event: Event) {
    this.title = (event.target as HTMLInputElement).innerText;
  }
 
  PDF(){
    this.toPDF.convertToPDF(this.title);
  }

  
}
