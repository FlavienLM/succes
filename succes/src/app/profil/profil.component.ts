import { Component } from '@angular/core';
import { Utilisateur } from '../model/utilisateur.model';
import { Succes } from '../model/succes.model';
import { UtilisateurService } from '../services/utilisateur.service';
import { SuccesService } from '../services/succes.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

  listeSucces: Succes[] = []

  rechercheSucces: Succes[] = [];

  constructor(private succesService: SuccesService,private utilisateurService: UtilisateurService) {} 

  ngOnInit(): void {
    this.listeSucces = this.succesService.listeSpecifiqueUtilisateur!;
    this.rechercheSucces = this.listeSucces;
  }

  Supprimer(id: number, text:string){

    const liste = this.utilisateurService.utilisateur.succesAccomplis.filter(succes => succes !== id);

    this.listeSucces = this.listeSucces.filter(succes => succes.id != id);
    this.utilisateurService.updateSucces = liste;

    this.filterResults(text);
  }

  aucunSuccesAccomplie():boolean {
    return this.utilisateurService.utilisateur.succesAccomplis.length === 0;
  }

  utilisateur:Utilisateur = this.utilisateurService.utilisateur;

  filterResults(text: string) {
    if (!text) {
      this.rechercheSucces = this.listeSucces;
      return;
    }
  
    this.rechercheSucces = this.listeSucces.filter(
      succes => succes?.titre.toLowerCase().includes(text.toLowerCase())
    );
  }

  

}
