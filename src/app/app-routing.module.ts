import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecepiDetailComponent } from './pages/recepi-detail/recepi-detail.component';

const routes: Routes = [
  {path:'inicio',component:HomeComponent},
  {path:'receta/:id',component:RecepiDetailComponent},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
