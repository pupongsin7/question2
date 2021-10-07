import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-Question2';
  searchText:any;
  data:any
  constructor(private http:HttpClient) { 
    this.http.get('https://api.publicapis.org/categories').toPromise().then(async data => {
    console.log(data)
    this.data =  data
  
    });    
    console.log(this.data,"this.data")
  }
 
}
