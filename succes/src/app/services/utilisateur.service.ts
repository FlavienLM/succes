import { Injectable } from '@angular/core';
import { Utilisateur } from '../model/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor() { }

  listeUtilisateurs: Utilisateur[] = [
    {
      identifiant: "user",
      password: "password",
      succesAccomplis: [1,0],
    },
    {
      identifiant: "utilisateur",
      password: "mot_de_passe",
      succesAccomplis: [1],
    }
  ];

  private utilisateurActuel: Utilisateur = this.listeUtilisateurs[0];

  ngOnInit(): void {
    sessionStorage.setItem('utilisateur',JSON.stringify(this.utilisateurActuel));
  }




  get utilisateur(): Utilisateur{
    const user = JSON.parse(sessionStorage.getItem('utilisateur')!) as Utilisateur;
    return user ?? {
      identifiant: "",
      password: "",
      succesAccomplis: []
    }
  }

  set utilisateur(utilisateur: Utilisateur){
    sessionStorage.setItem('utilisateur',JSON.stringify(utilisateur));
  }

  get listeUtilisateur(){
    return this.listeUtilisateurs;
  }

  set updateSucces(liste: number[]){
    const user = this.utilisateur;
    user.succesAccomplis = liste;
    sessionStorage.setItem('utilisateur',JSON.stringify(user));
  }

  estConnecter(){
    return (sessionStorage.getItem('utilisateur') != null);
  }

  Deconnection(){
    sessionStorage.clear();
  }

}
