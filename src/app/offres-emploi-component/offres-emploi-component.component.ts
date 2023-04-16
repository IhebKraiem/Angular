import { Component } from '@angular/core';
import { Emploi } from '../models/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent {

  listeEmploi:Emploi[]=[
    { reference: '1', titre: 'Développeur Web', entreprise: 'ABC inc.', etat: true },
    { reference: '2', titre: 'Ingénieur Logiciel', entreprise: 'XYZ corp.', etat: false }
  
  ];
  nomEntreprise!: string ;



  calculerBilan() {
    const nbNonCloturees = this.listeEmploi.filter(emploi => !emploi.etat).length;
    alert(`Nombre d'offres d'emploi non clôturées : ${nbNonCloturees}`);
  }
  rechercherOffres() {
    if (this.nomEntreprise.trim()) {
      this.listeEmploi = this.listeEmploi.filter(emploi => emploi.entreprise.toLowerCase().includes(this.nomEntreprise.toLowerCase()));
    } else {
      this.listeEmploi = [
        { reference: '1', titre: 'Développeur Web', entreprise: 'Sopra', etat: true },
        { reference: '2', titre: 'Ingénieur Logiciel', entreprise: 'Vermeg', etat: false },
        { reference: '3', titre: 'Analyste de données', entreprise: 'Ey', etat: true }
      ];
    }
  }
}
