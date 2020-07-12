import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  Id:number;
  private headers = new Headers({ 'Content-Type': 'application/json'});

  StudentDTO = [];
  fetchData = function() {
    this.http.get("http://localhost:5555/StudentDTO").subscribe(
      (res: Response) => {
        this.StudentDTO = res.json();
      }
    )
  }

  deleteProduct = function(Id) {
    if(confirm("Are you sure?")) {
      const url = `${"http://localhost:5555/StudentDTO"}/${Id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
        .then(() => {
        this.fetchData();
        })
    }
  }

  ngOnInit() {
    this.fetchData();
  }
}
