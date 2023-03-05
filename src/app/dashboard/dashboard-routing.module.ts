import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComAComponent } from './com-a/com-a.component';
import { ComBComponent } from './com-b/com-b.component';
import { ComCComponent } from './com-c/com-c.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './parent/parent.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'', component:ParentComponent ,children:[
    {path:'header', component:HeaderComponent},
    {path:'footer', component:FooterComponent},
    {path:'sidebar', component:SidebarComponent},
    {path:'com-a',component:ComAComponent},
    {path:'com-b',component:ComBComponent},
    {path:'com-c',component:ComCComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
