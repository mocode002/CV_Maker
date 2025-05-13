import { Component } from '@angular/core';
import { ToPdfService } from '../to-pdf.service';

@Component({
  selector: 'app-temp3',
  standalone: true,
  imports: [],
  templateUrl: './temp3.component.html',
  styleUrl: './temp3.component.css'
})
export class Temp3Component {
  constructor(private toPDF : ToPdfService) {}

  title = "Nom Prenom";

  onTitleInput(event: Event) {
    this.title = (event.target as HTMLInputElement).innerText;
  }

  PDF(){
    this.toPDF.convertToPDF(this.title)
  }


  skillService: any;
  addSkill() {
    var skillsList = document.getElementById('skillsList');
    var li = document.createElement('li');
    li.innerHTML =
      '<i class="icon fas fa-check-circle text-darkblue"></i><input class="bbb" type="text" placeholder="Nouvelle compétence"> ';
    skillsList!.appendChild(li);
  }


  addLanguage() {
    var languagesList = document.getElementById('languagesList');
    var li = document.createElement('li');
    li.innerHTML =
      '<input class="bbb" type="text" placeholder="Nouvelle langue">';
    languagesList!.appendChild(li);
  }

  addInterest() {
    var interestsList = document.getElementById('interestsList');
    var li = document.createElement('li');
    li.innerHTML =
      '<input class="bbb" type="text" placeholder="Nouveau centre d\'intérêt">';
    interestsList!.appendChild(li);
  }

  addExperience() {
    var experienceList = document.getElementById('experienceList');
    var li = document.createElement('li');
    li.innerHTML =
      '<strong><input class="xxx" type="text" placeholder="Nouvelle expérience"></strong><br> <textarea class="xxx" placeholder="Description"></textarea> <br> <input class="xxx" type="text" placeholder="Année">';
    experienceList!.appendChild(li);
  }

  addEducation() {
    var educationList = document.getElementById('educationList');
    var li = document.createElement('li');
    li.innerHTML =
      '<input class="xxx" type="text" placeholder="formation"><br> <input class="xxx" type="text" placeholder="Etablissement"> <br> <input class="xxx" type="text" placeholder="Année d\'obtention de diplome">';
    educationList!.appendChild(li);
  }

  addOtherExperience() {
    var otherExperienceList = document.getElementById('otherExperienceList');
    var li = document.createElement('li');
    li.innerHTML =
      '<strong><input class="xxx" class="" type="text" placeholder="Nouvelle expérience"></strong> <br> <textarea class="xxx" placeholder="Description"></textarea><br>  <input class="xxx" type="text" placeholder="Année">';
    otherExperienceList!.appendChild(li);
  }

  // Fonction pour supprimer une entrée
  removeEntry(event: any) {
    if (this.skillService) {
      // Utilisez event.target pour accéder à l'élément déclencheur
      this.skillService.removeEntry(event.target);
    }
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

  terminer() {
    // Masquer les icônes "+" et "poubelle"
    var addIcons = document.querySelectorAll('.add-entry');
    addIcons.forEach(function (icon) {
      if (icon instanceof HTMLElement) {
        icon.style.display = 'none';
      }
    });
  }

  modifier() {
    // Réafficher les icônes "+" et "poubelle"
    var addIcons = document.querySelectorAll('.add-entry');
    addIcons.forEach(function (icon) {
      if (icon instanceof HTMLElement) {
        icon.style.display = 'inline-block';
      }
    });
  }
}
