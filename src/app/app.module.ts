import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutsectionRoutingModule } from './aboutsection/aboutsection-routing.module';
import { AboutsectionModule } from './aboutsection/aboutsection.module';
import { RoomssectionModule } from "./roomssection/roomssection.module";
import { BlogsectionModule } from './blogsection/blogsection.module';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SigninComponent,
    SignupComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AboutsectionRoutingModule,
    AboutsectionModule,
    RoomssectionModule,
    BlogsectionModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
