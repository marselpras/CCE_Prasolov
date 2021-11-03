import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  name= '/app';


  constructor(private http: HttpClient, private getService: AppService){}

  ngOnInit(){
        this.showData();
  }

  showData() {
  this.getService.getData().subscribe(res => {
    this.data= res;
  });
}

}
