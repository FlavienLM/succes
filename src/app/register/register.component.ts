import { Component, Input } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { UtilisateurService } from '../services/utilisateur.service';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterOutlet,RouterLinkActive, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  @Input() messageErreur:string = "";

  ngOnInit(): void {
    if(this.utilisateurService.estConnecter()){
      this.router.navigate(['/accueil']);
    }
  }

  constructor(private utilisateurService: UtilisateurService, private router: Router) { }

  register(registerForm: NgForm){
    const userName = registerForm.form.controls["userName"].value;
    const password = registerForm.form.controls["password"].value;

    const identification = this.utilisateurService.listeUtilisateurs.find(user => (
      user.identifiant === userName
    ))

    if(identification === undefined){
      const newUser = {
        identifiant: userName,
        password: password,
        succesAccomplis: [],
      }
      this.utilisateurService.listeUtilisateurs.push(newUser);
      this.utilisateurService.utilisateur = newUser
      this.router.navigate(['/accueil']);
    }else{
      this.messageErreur = `Le nom d'utilisateur '`+userName+`' éxiste déjà`;
    }

  }
} 
