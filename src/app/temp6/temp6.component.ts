import { Component } from '@angular/core';
import { ToPdfService } from '../to-pdf.service';

@Component({
  selector: 'app-temp6',
  standalone: true,
  imports: [],
  templateUrl: './temp6.component.html',
  styleUrl: './temp6.component.css'
})

export class Temp6Component {
  constructor(private ToPDF: ToPdfService){}
  
  PDF(){
    this.ToPDF.convertToPDF(this.title);
  }

  title = "Johnathan Doe";

  onTitleInput(event: Event) {
    this.title = (event.target as HTMLInputElement).innerText;
  }
 
}
