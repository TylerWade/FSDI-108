import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { LoginComponent } from './login/login.component';
import { ListuserComponent } from './listuser/listuser.component';

import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainpageComponent,
    RegisteruserComponent,
    LoginComponent,
    ListuserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Inspect the module to all the components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
