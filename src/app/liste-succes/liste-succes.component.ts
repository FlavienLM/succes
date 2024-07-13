import { Component } from '@angular/core';
import { Succes } from '../model/succes.model';
import { CommonModule } from '@angular/common';
import { SuccesService } from '../services/succes.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-liste-succes',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './liste-succes.component.html',
  styleUrl: './liste-succes.component.css'
})
export class ListeSuccesComponent {

  listeIntegralSucces: Succes[] = []

  rechercheSucces: Succes[] = [];

  constructor(private succesService: SuccesService,public utilisateurService: UtilisateurService) {} 

  ngOnInit(): void {
    this.listeIntegralSucces = this.succesService.ListeSucces;
    this.rechercheSucces = this.listeIntegralSucces;
  }

  succesComplete(succes: Succes): boolean{
    const succesUtilisateur = this.succesService.listeSpecifiqueUtilisateur;
    const classe = succesUtilisateur.find(s => 
      s.id === succes.id
    )
    return classe !== undefined;
  }

  Ajouter(id: number, text: string){
    const liste = this.utilisateurService.utilisateur.succesAccomplis;
    liste.push(id);
    this.utilisateurService.updateSucces = liste;
    this.filterResults(text);
  }

  filterResults(text: string) {
    if (!text) {
      this.rechercheSucces = this.listeIntegralSucces;
      return;
    }
  
    this.rechercheSucces = this.listeIntegralSucces.filter(
      succes => succes?.titre.toLowerCase().includes(text.toLowerCase())
    );
  }
    
}

