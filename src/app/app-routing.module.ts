import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const rootAppRoutes: Routes = [
  { path: '',  redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', loadChildren: './overview/workplace/workplace.module#WorkplaceModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    rootAppRoutes,
    {
      enableTracing: true // <-- debugging purposes only
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
