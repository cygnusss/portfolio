import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { ChattermonComponent } from './chattermon/chattermon.component'
import { MarsklifComponent } from './marsklif/marsklif.component'
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ChattermonComponent,
    MarsklifComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
