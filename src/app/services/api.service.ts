import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'

  constructor(private httpClient: HttpClient) { }

  getCategory(): Observable<any> {
    let apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    return this.httpClient.get(apiUrl)
  }
}
