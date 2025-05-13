import { Component } from '@angular/core';
import { ToPdfService } from '../to-pdf.service';

@Component({
  selector: 'app-temp5',
  standalone: true,
  imports: [],
  templateUrl: './temp5.component.html',
  styleUrl: './temp5.component.css'
})
export class Temp5Component {
  
  constructor(private ToPDF: ToPdfService){}
  
  PDF(){
    this.ToPDF.convertToPDF(this.title);
  }

  title = "Nom Prenom";

  onTitleInput(event: Event) {
    this.title = (event.target as HTMLInputElement).innerText;
  }
 

  
  ajouterExperience(): void {
    const experiencesContainer: HTMLDivElement | null = document.getElementById('experiencesContainer') as HTMLDivElement;

    if (experiencesContainer) {
        const nouvelleExperience: HTMLDivElement = document.createElement('div');
        nouvelleExperience.classList.add('colonnes');

        nouvelleExperience.innerHTML = `
        <div class="colonne1">
            <input class="annee" type="text" placeholder="début"><br>
            <div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _</div><br>
            <input class="annee" type="text" placeholder="fin">
        </div>
        <div class="colonne2" style="padding-left: 20px;">
            <p contenteditable="true" style="font-weight: bold;" >Titre du poste</p>
            <p contenteditable="true">Décrivez votre expérience : <br> -Nom de l'entreprise <br> -Période d'emploi <br> -Responsabilités....<br></p>
        </div>

    `;

        experiencesContainer.appendChild(nouvelleExperience);
    }
}

ajouterFormation(): void {
    const educationsContainer: HTMLDivElement | null = document.getElementById('educationsContainer') as HTMLDivElement;

    if (educationsContainer) {
        const nouvelleFormation: HTMLDivElement = document.createElement('div');
        nouvelleFormation.classList.add('education');

        nouvelleFormation.innerHTML = `
        <i class="fas fa-graduation-cap"></i>
        <span style="font-weight: bolder;">FORMATION</span>
        <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Etablissement<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style="color: gray;">Année</span>
        <br><br>`;

        educationsContainer.insertBefore(nouvelleFormation, document.querySelector('.icon-button'));
    }
}

ajouterCompetence(): void {
    const competencesContainer: HTMLDivElement | null = document.getElementById('competencesContainer') as HTMLDivElement;

    if (competencesContainer) {
        const nouvelleCompetence: HTMLDivElement = document.createElement('div');
        nouvelleCompetence.classList.add('competence');

        nouvelleCompetence.innerHTML = `
        <P contenteditable="true">&#9679; Nouvelle compétence</P>

    `;

        competencesContainer.appendChild(nouvelleCompetence);
    }
}

ajouterLangage(): void {
    const langagesContainer: HTMLDivElement | null = document.getElementById('langagesContainer') as HTMLDivElement;

    if (langagesContainer) {
        const nouveauLangage: HTMLDivElement = document.createElement('div');
        nouveauLangage.classList.add('langage');

        nouveauLangage.innerHTML = `
        <P contenteditable="true">&#9679; Nouveau langage</P>

    `;

        langagesContainer.appendChild(nouveauLangage);
    }
}

ajouterCentreInteret(): void {
    const centresInteretContainer: HTMLDivElement | null = document.getElementById('centresInteretContainer') as HTMLDivElement;

    if (centresInteretContainer) {
        const nouveauCentreInteret: HTMLDivElement = document.createElement('div');
        nouveauCentreInteret.classList.add('centreInteret');

        nouveauCentreInteret.innerHTML = `
        <P contenteditable="true">&#9679; Nouveau centre d'intérêt</P>
    `;

        centresInteretContainer.appendChild(nouveauCentreInteret);
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
var addIcons = document.querySelectorAll('.add-entry');

addIcons.forEach(function (icon) {
  if (icon instanceof HTMLElement) {
    icon.style.display = 'inline-block';
  }
});
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

