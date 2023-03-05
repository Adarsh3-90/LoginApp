import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ComAComponent } from './com-a/com-a.component';
import { ComBComponent } from './com-b/com-b.component';
import { ComCComponent } from './com-c/com-c.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ComAComponent,
    ComBComponent,
    ComCComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
