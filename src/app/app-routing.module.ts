/**
 * An Angular best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and imported by
 * the root AppModule.
 */
import {NgModule} from '@angular/core';
// import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent}
];

// You generally don't declare components in a routing module so you can delete @NgModule.declarations array and CommonModule references.
@NgModule({
  /*
  imports: [
    CommonModule
  ],
  declarations: []
  */
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
