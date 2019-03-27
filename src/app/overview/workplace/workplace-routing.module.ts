import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkplaceComponent } from './workplace.component';
import { RootPartnersComponent } from './root-partners/root-partners.component';
import { AddRootPartnerComponent } from './add-root-partner/add-root-partner.component';

const workplaceRoutes: Routes = [
  // HACK: the root redirect due to named outlets not being able to work as children of "path: ''"
  { path: '', redirectTo: 'workplace', pathMatch: 'full' },
  { path: 'workplace', component: WorkplaceComponent, children: [
    { path: '', redirectTo: 'partners', pathMatch: 'full' },
    { path: 'partners', component: RootPartnersComponent, children: [
      // child for the edit area outlet
      { path: 'addRootPartner', component: AddRootPartnerComponent, outlet: 'editArea' }
    ] }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(workplaceRoutes)
    ],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }