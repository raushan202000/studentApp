import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private http: HttpClient) { }
  confirmationString:string = "New product has been added";
  isAdded: boolean = false;
  productObj:object = {};

  addNewProduct = function(StudentDTO) {
    this.productObj = {
      "Age": StudentDTO.Age,
      "Date":StudentDTO.Date,
      "Email":StudentDTO.Email,      
      "Name": StudentDTO.Name,
      "RollNo":StudentDTO.RollNo,
      "isMale":StudentDTO.isMale
    }
    this.http.post("http://localhost:5555/StudentDTO/", this.productObj).subscribe((res:Response) => {
      this.isAdded = true;
    })
  }

  ngOnInit() {
  }

}
