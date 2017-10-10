import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookModule } from "./book/book.module";
import { UserModule } from "./user/user.module";
import { routing } from "./app.routes";
import { HttpModule } from "@angular/http";
import 'rxjs/add/operator/map';

@NgModule({
  imports: [
    BrowserModule, routing, HttpModule, BookModule, UserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
