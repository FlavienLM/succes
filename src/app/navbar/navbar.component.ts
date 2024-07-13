import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../model/utilisateur.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLinkActive,CommonModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  constructor(public utilisateurService: UtilisateurService, private router: Router) {} 

  utilisateurActuel: Utilisateur = this.utilisateurService.utilisateur;

  Deconnection(){
    this.utilisateurService.Deconnection();
    this.router.navigate(['/accueil']);
  }

}
