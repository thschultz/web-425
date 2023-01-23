// WEB 425 Angular with TypeScript
// Contributors:
// Richard Krasso
// Thomas James Schultz

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, MyImageComponent, MyDetailsComponent, SignInComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
// export app module
export class AppModule { }
