import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllResultsComponent } from './components/searchs/all-results/all-results.component';
import { SearchResultsComponent } from './components/searchs/search-results/search-results.component';
import { HomeComponent } from './pages/home/home.component';
import { RecepiDetailComponent } from './components/detail/recepi-detail/recepi-detail.component';

const routes: Routes = [
  {
    path: 'inicio', component: HomeComponent,
    children: [
    { path: 'recetas/:id', component: RecepiDetailComponent },
    { path: 'resultados', component: SearchResultsComponent },
    { path: '**',component: AllResultsComponent },
    ]
  },


  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
