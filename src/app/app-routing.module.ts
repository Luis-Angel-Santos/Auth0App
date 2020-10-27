import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './components/home/home.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'protegido',
   component: ProtegidoComponent,
   canActivate: [AuthGuardGuard]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
