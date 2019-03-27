import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WorkspaceRoutingModule } from './workplace-routing.module';

import { WorkplaceComponent } from './workplace.component';
import { RootPartnersComponent } from './root-partners/root-partners.component';
import { AddRootPartnerComponent } from './add-root-partner/add-root-partner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WorkspaceRoutingModule
  ],
  declarations: [
    WorkplaceComponent,
    RootPartnersComponent,
    AddRootPartnerComponent
  ],
  exports: [
    WorkplaceComponent
  ]
})
export class WorkplaceModule { }