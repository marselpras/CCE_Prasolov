import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'
import { AppRoutingModule } from '../app-routing.module'
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  items: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient, private itemService: AppService ) { }

  ngOnInit(): void {
    this.showData();
  }

  showData() {
    this.itemService.getData().subscribe(res => {this.items = res;});
  }

  updData() {
    let date = (<HTMLInputElement>document.querySelector('#date')).value;
    let upddate = new Date(date)
    const data = {
      "currency": {
        "departments": this.items.json.departments
      },
      "date": upddate
    }
    document.querySelectorAll('*[data-department]').forEach((inp) => {
      let input = (inp as HTMLElement);
      let inputValue = (<HTMLInputElement>inp).value;
      let operation = "buy";
      let operation_index = undefined;
      if(input.dataset.buy){
        operation = "buy";
        operation_index = input.dataset.buy;
      } else {
        operation = "sell";
        operation_index = input.dataset.sell;
      }
      data.currency.departments[input.dataset.department!].currencies[input.dataset.currency!][operation][operation_index!][input.dataset.type] = inputValue
    });
    this.http.post(`/api/currency/`, JSON.stringify(data), this.httpOptions).subscribe();
    alert('Данные о курсах успешно обновлены.');
  }

}
