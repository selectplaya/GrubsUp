import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Food {
  public name: string;
  public category: string;
  public image: string;
  public cookingMethods: string[];

}





@Injectable()
export class FoodService {
  constructor(
    private http: HttpClient
  ) { }

  getFoods() {
    return this.http.get<Food[]>( `http://localhost:2479/api/foods`);
  }
}

