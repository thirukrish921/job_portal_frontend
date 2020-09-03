import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import { OwnerAuthComponent } from './pages/owner/owner-auth/owner-auth.component';
import{SeekerHomeComponent}from './pages/seeker/seeker-home/seeker-home.component';
import{SeekerAuthComponent} from './pages/seeker/seeker-auth/seeker-auth.component';
import { OwnerHomeComponent } from './pages/owner/owner-home/owner-home.component';
import {AddJobComponent} from './pages/owner/owner-home/add-job/add-job.component';
const routes: Routes = [ {path:'',
redirectTo: '/authentication',
pathMatch: 'full'
},{
path:'authentication',
component:IndexComponent
},
  {
    path:'owner-auth',
    component:OwnerAuthComponent
  },
  {
    path:'seeker-auth',
    component:SeekerAuthComponent
  },
  {
    path:'owner-home',
    component:OwnerHomeComponent
  },
  {
    path:'seeker-home',
    component:SeekerHomeComponent
  },
  {
    path:'add-job',
    component:AddJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
