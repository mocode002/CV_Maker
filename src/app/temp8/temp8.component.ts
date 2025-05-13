import { Component } from '@angular/core';
import { ToPdfService } from '../to-pdf.service';

@Component({
  selector: 'app-temp8',
  standalone: true,
  imports: [],
  templateUrl: './temp8.component.html',
  styleUrl: './temp8.component.css'
})
export class Temp8Component {
  constructor(private ToPDF: ToPdfService){}
  
  PDF(){
    this.ToPDF.convertToPDF();
  }

  
  previewImage() {
    var input = document.getElementById('imageInput') as HTMLInputElement;
    var preview = document.getElementById('previewImage') as HTMLImageElement;

    if (input && preview) {
      var file = input.files?.[0];

      if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
          if (e.target) {
            preview.src = e.target.result as string;
          }
        };

        reader.readAsDataURL(file);
      }
    }
  }
 
}

