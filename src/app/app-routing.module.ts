import { SectioncustomersComponent } from './sectioncustomers/sectioncustomers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'dashboard', component : DashboardComponent},
  {path: 'customer', component : SectioncustomersComponent},
  {path: '', redirectTo: '/dashboard' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
