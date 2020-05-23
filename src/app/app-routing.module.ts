import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';


const routes: Routes = [
  {path: '', component: MainNavComponent},
  {path: 'contacts', component: SideNavComponent},
  {path: 'contacts/:id', component: SideNavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
