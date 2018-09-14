import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { JoinusComponent } from './joinus/joinus.component';
//import { RouterModule} from '@angular/router'
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

import { RouterModule} from '@angular/router';
import {FormsModule } from '@angular/forms';

import { SignUpComponent } from './sign-up/sign-up.component';
import { FitnessComponent } from './fitness/fitness.component';
import { GymFitnessComponent } from './gym-fitness/gym-fitness.component';
import { SwimmingComponent } from './swimming/swimming.component';
import { SportsComponent } from './sports/sports.component';
import { RegisterComponent } from './register/register.component';
import { ArticlesComponent } from './articles/articles.component';
import { Login2Component } from './login2/login2.component';


import {MatDatepickerModule} from '@angular/material/datepicker';
import { RegisterInstComponent } from './register-inst/register-inst.component';
import { DateComponent } from './date/date.component';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    FitnessComponent,
    GymFitnessComponent,
    SwimmingComponent,
    SportsComponent,
    RegisterComponent,
    ArticlesComponent,
    Login2Component,
    JoinusComponent,
    RegisterInstComponent,
    DateComponent,
    FileuploadComponent,
    ProfileComponent
    
    
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatDatepickerModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'header',
        component:HeaderComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'fileupload',
        component:FileuploadComponent
      },
      {
        path:'date',
        component:DateComponent
      },
      {
        path:'joinus',
        component:JoinusComponent
      },
      {
        path:'login2',
        component:Login2Component
      },
      {
        path:'articles',
        component:ArticlesComponent
      },
      {
      path:'login',
      component:LoginComponent
    },
      {
        path:'sign-up',
        component:SignUpComponent
      },

     { path:'',
      component:HomeComponent
      }
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    setTheme('bs3'); // or 'bs4'

  }
}
