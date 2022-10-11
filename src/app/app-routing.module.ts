import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PrincipalComponent} from './principal/principal.component';

const routes: Routes = [

  {path: 'principal/quienes-somos', component: PrincipalComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
