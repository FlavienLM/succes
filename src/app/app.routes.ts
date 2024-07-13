import { Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeSuccesComponent } from './liste-succes/liste-succes.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AmisComponent } from './amis/amis.component';

export const routes: Routes = [
    {
        path: 'profil',
        component: ProfilComponent
    },
    {
        path: 'accueil',
        component: AccueilComponent
    },
    {
        path: 'liste',
        component: ListeSuccesComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'amis',
        component: AmisComponent
    },
];
