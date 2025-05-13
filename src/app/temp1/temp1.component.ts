import { Component } from '@angular/core';
import { ToPdfService } from '../to-pdf.service';

@Component({
  selector: 'app-temp1',
  standalone: true,
  imports: [],
  templateUrl: './temp1.component.html',
  styleUrl: './temp1.component.css'
})
export class Temp1Component {
  constructor(private ToPDF : ToPdfService){}

  title = "John Smith";

  onTitleInput(event: Event) {
    this.title = (event.target as HTMLInputElement).innerText;
  }
 
  PDF(){
    this.ToPDF.convertToPDF(this.title);
  }

  
  openFileInput() {
    // Trigger click on the hidden file input
    document.getElementById('imageInput')?.click();
  }

  previewImage(event: any) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // Update the src attribute of the img element with the new image data
        const previewImage = document.getElementById('previewImage') as HTMLImageElement;
        if (previewImage) {
          previewImage.src = e.target?.result as string;
        }
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  }

}
