import { Component } from '@angular/core';
import { ToPdfService } from '../to-pdf.service';

@Component({
  selector: 'app-temp7',
  standalone: true,
  imports: [],
  templateUrl: './temp7.component.html',
  styleUrl: './temp7.component.css'
})
export class Temp7Component {
  constructor(private ToPDF: ToPdfService){}
  
  PDF(){
    this.ToPDF.convertToPDF(this.title);
  }

  title = "Addeline Panier";

  onTitleInput(event: Event) {
    this.title = (event.target as HTMLInputElement).innerText;
  }
 
}
