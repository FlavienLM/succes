import { Injectable } from '@angular/core';
import { Succes } from '../model/succes.model';
import { UtilisateurService } from './utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class SuccesService {

  constructor(private utilisateurService: UtilisateurService) {}

  listeSucces: Succes[] = [
    {
      titre: "Premier succès",
      description: "Rien de bien spécial",
      id: 0,
      nombreRealisation: 1,
      categories: []
  },
  {
      titre: "Deuxième succès",
      description: "Obtenu au loto",
      id: 1,
      nombreRealisation: 10,
      categories: ["Incroyable", "Époustouflant"]
  },
  {
      titre: "Marathon terminé",
      description: "A couru un marathon complet",
      id: 2,
      nombreRealisation: 3,
      categories: ["Sport", "Endurance"]
  },
  {
      titre: "Diplôme universitaire",
      description: "A obtenu un diplôme universitaire",
      id: 3,
      nombreRealisation: 1,
      categories: ["Éducation", "Prestigieux"]
  },
  {
      titre: "Cuisine maîtrisée",
      description: "A préparé un repas gastronomique",
      id: 4,
      nombreRealisation: 5,
      categories: ["Cuisine", "Délicieux"]
  },
  {
      titre: "Lancement d'une startup",
      description: "A fondé une startup avec succès",
      id: 5,
      nombreRealisation: 2,
      categories: ["Technologie", "Entrepreneuriat"]
  },
  {
      titre: "Achat d'une maison",
      description: "A acheté sa première maison",
      id: 6,
      nombreRealisation: 1,
      categories: ["Immobilier", "Investissement"]
  },
  {
      titre: "Voyage autour du monde",
      description: "A voyagé dans plus de 30 pays",
      id: 7,
      nombreRealisation: 1,
      categories: ["Aventure", "Culture"]
  },
  {
      titre: "Maîtrise d'une langue étrangère",
      description: "Parle couramment une langue étrangère",
      id: 8,
      nombreRealisation: 2,
      categories: ["Éducation", "Linguiste"]
  },
  {
      titre: "Record personnel battu",
      description: "A battu son propre record de vitesse en course",
      id: 9,
      nombreRealisation: 7,
      categories: ["Sport", "Compétition"]
  },
  {
      titre: "Projet caritatif",
      description: "A initié et mené à bien un projet caritatif",
      id: 10,
      nombreRealisation: 4,
      categories: ["Bénévolat", "Humanitaire"]
  },
  {
      titre: "Participation à un TED Talk",
      description: "A donné une conférence TED",
      id: 11,
      nombreRealisation: 1,
      categories: ["Éducation", "Inspiration"]
  },
  {
      titre: "Livre publié",
      description: "A écrit et publié un livre",
      id: 12,
      nombreRealisation: 1,
      categories: ["Littérature", "Créativité"]
  },
  {
      titre: "Championnat gagné",
      description: "A remporté un championnat sportif",
      id: 13,
      nombreRealisation: 2,
      categories: ["Sport", "Victoire"]
  },
  {
      titre: "Artiste exposé",
      description: "A exposé ses œuvres dans une galerie",
      id: 14,
      nombreRealisation: 3,
      categories: ["Art", "Créativité"]
  },
  {
      titre: "Corde de piano",
      description: "A appris à jouer du piano",
      id: 15,
      nombreRealisation: 6,
      categories: ["Musique", "Inspiration"]
  },
  {
      titre: "Invention brevetée",
      description: "A breveté une invention",
      id: 16,
      nombreRealisation: 1,
      categories: ["Technologie", "Innovation"]
  },
  {
      titre: "Maîtrise de la méditation",
      description: "A atteint un haut niveau de méditation",
      id: 17,
      nombreRealisation: 4,
      categories: ["Bien-être", "Spiritualité"]
  },
  {
      titre: "Réduction de l'empreinte carbone",
      description: "A significativement réduit son empreinte carbone",
      id: 18,
      nombreRealisation: 1,
      categories: ["Environnement", "Durabilité"]
  },
  {
      titre: "Maître en échecs",
      description: "A obtenu le titre de maître aux échecs",
      id: 19,
      nombreRealisation: 1,
      categories: ["Jeux", "Stratégie"]
  },
  {
      titre: "Podcast lancé",
      description: "A lancé un podcast populaire",
      id: 20,
      nombreRealisation: 1,
      categories: ["Média", "Inspiration"]
  }
  ]

  get ListeSucces(): Succes[]{
    return this.listeSucces;
  }

  get listeSpecifiqueUtilisateur(){
    let list: Succes[] = [];
    const user = this.utilisateurService.utilisateur;
    user.succesAccomplis.forEach(succes => 
      list.push(
        this.listeSucces.find(
          succesSpecifiqueUtilisateur => succesSpecifiqueUtilisateur.id === succes
        )!
      )
    );

    return list;
  }
}
