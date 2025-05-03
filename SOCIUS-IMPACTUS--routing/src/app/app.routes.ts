import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contatos/contatos.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProjetosComponent } from './projetos/projetos.component';

export const routes: Routes = [
    {path: "projetos" , component: ProjetosComponent },
    {path: "sobre" , component: SobreComponent},
    {path: "contatos", component: ContatosComponent},
    {path: "home" , component: HomeComponent},
    {path: "**", component: HomeComponent}
];
