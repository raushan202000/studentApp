import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';


import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  Id:number;
  data:object = {};
  StudentDTO = [];
  exist = false;
  productObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  update(product) {
    this.productObj = {
      "Age": product.Age,
      "Date":product.Date,
      "Email":product.Email,      
      "Name": product.Name,
      "RollNo":product.RollNo,
      "isMale":product.isMale
    };
    const url = `${"http://localhost:5555/StudentDTO"}/${this.Id}`;
    this.http.put(url, JSON.stringify(this.productObj), {headers: this.headers})
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
      })
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.Id = +params['Id'];
    });
    this.http.get("http://localhost:5555/StudentDTO").subscribe(
      (res: Response) => {
        this.StudentDTO = res.json();
        for(var i = 0; i < this.StudentDTO.length ; i++) {
          if(parseInt(this.StudentDTO[i].Id) === this.Id) {
            this.exist = true;
            this.data = this.StudentDTO[i];
            break;
          } else {
            this.exist = false;
          }
        }
      }
    )
  }

}
