import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { HttpClientModule} from '@angular/common/http';


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
    Login2Component
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot([
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
export class AppModule { }
