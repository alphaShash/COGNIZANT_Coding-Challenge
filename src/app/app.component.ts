import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   resData: any;
   catData = [];

   constructor(private category: ApiService) { }

  ngOnInit() {

    this.category.getCategory().subscribe(data => {
      console.warn (data);
      this.resData = data;
      this.catData = this.resData.categories;
    })

  }
}
