import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { AppService } from './app.service';
import { AppRoutingModule } from './app-routing.module'

@Component({
    selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

  ngOnInit() {

  }
}