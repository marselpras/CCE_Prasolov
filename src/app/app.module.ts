import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';


@NgModule({
imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
],
declarations: [
    AppComponent,
    UpdateComponent,
    HomeComponent,
    ConfigComponent
],
bootstrap: [AppComponent]})

export class AppModule { }
