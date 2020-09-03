import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerAuthComponent } from './pages/owner/owner-auth/owner-auth.component';
import { OwnerLoginComponent } from './pages/owner/owner-auth/owner-login/owner-login.component';
import { OwnerRegComponent } from './pages/owner/owner-auth/owner-reg/owner-reg.component';
import { IndexComponent } from './pages/index/index.component';
import { OwnerHomeComponent } from './pages/owner/owner-home/owner-home.component';
import { SeekerAuthComponent } from './pages/seeker/seeker-auth/seeker-auth.component';
import { SeekerLoginComponent } from './pages/seeker/seeker-auth/seeker-login/seeker-login.component';
import { SeekerRegComponent } from './pages/seeker/seeker-auth/seeker-reg/seeker-reg.component';
import { AddJobComponent } from './pages/owner/owner-home/add-job/add-job.component';
import { AddedJobComponent } from './pages/owner/owner-home/added-job/added-job.component';
import { SeekerHomeComponent } from './pages/seeker/seeker-home/seeker-home.component';
import { SeekerJobsComponent } from './pages/seeker/seeker-home/seeker-jobs/seeker-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerAuthComponent,
    OwnerLoginComponent,
    OwnerRegComponent,
    IndexComponent,
    OwnerHomeComponent,
    SeekerAuthComponent,
    SeekerLoginComponent,
    SeekerRegComponent,
    AddJobComponent,
    AddedJobComponent,
    SeekerHomeComponent,
    SeekerJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
