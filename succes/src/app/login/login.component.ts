import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UtilisateurService } from '../services/utilisateur.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterOutlet,RouterLinkActive, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  messageErreur: string = "";

  ngOnInit(): void {
    if(this.utilisateurService.estConnecter()){
      this.router.navigate(['/accueil']);
    }
  }


  constructor(private utilisateurService: UtilisateurService, private router: Router) { }


  login(loginForm : NgForm){
    const userName = loginForm.form.controls["userName"].value;
    const password = loginForm.form.controls["password"].value;

    const identification = this.utilisateurService.listeUtilisateurs.find(user => (
      user.identifiant === userName && user.password === password
    ))

    if(identification != undefined){
      this.utilisateurService.utilisateur = identification!;
      this.router.navigate(['/accueil']);
    }else{
      this.messageErreur = "Le nom d'utilisateur ou le mot de passe est incorrect";
    }


  }

}
