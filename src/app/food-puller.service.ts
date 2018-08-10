import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodPullerService {

  private url = 'https://www.nutritionix.com/nixapi/brands/579846a480c0dbd36eed07b9/items/1?limit=150&search=';

  pullFoods() {
    return this.http.get(this.url);
  }

  constructor(private http: HttpClient) { }
}
