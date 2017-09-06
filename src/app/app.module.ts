import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BusinessComponent } from './business/business.component';
import { FooterComponent } from './footer/footer.component';
import { AddressComponent } from './address/address.component';
import { StarsComponent } from './stars/stars.component';
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { Code404Component } from './code404/code404.component';
import {BusinessService} from "./shared/business.service";
import { BusinessDetailsComponent } from './business-details/business-details.component';
import {UserService} from "./shared/user.service";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'login',
    component: LoginComponent
  },{
    path: 'register',
    component: RegisterComponent
  },{
    path: 'auth',
    component: AuthComponent
  },{
    path: 'product/:productId',
    component: BusinessDetailsComponent
  },{
    path: '**',
    component: Code404Component
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    BusinessComponent,
    FooterComponent,
    AddressComponent,
    StarsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AuthComponent,
    Code404Component,
    BusinessDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [BusinessService,
              UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
