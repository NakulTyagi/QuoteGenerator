import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { freeApiService } from "./freeapi.service"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { Comments } from './comments';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
