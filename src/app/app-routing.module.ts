import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { TechComponent } from './tech/tech.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},
  {path:'tech',component:TechComponent},
  {path:'busi',component:BusinessComponent},
  {path:'sports',component:SportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
