import { Component } from '@angular/core';
import { ToPdfService } from '../to-pdf.service';


@Component({
  selector: 'app-temp4',
  standalone: true,
  imports: [],
  templateUrl: './temp4.component.html',
  styleUrl: './temp4.component.css'
})
export class Temp4Component {
  constructor(private ToPDF: ToPdfService){}
  
  PDF(){
    this.ToPDF.convertToPDF(this.title);
  }

  title = "Votre Nom";

  onTitleInput(event: Event) {
    this.title = (event.target as HTMLInputElement).innerText;
  }
 

}