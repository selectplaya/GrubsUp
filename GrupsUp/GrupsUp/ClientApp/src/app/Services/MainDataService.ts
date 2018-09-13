import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService, Food } from "./FoodService";


@Injectable()
export class MainDataService {
  public testData: string;
  public foods: Observable<Food[]>;

  constructor(private foodService: FoodService) {
    this.foods = foodService.getFoods();
  }
}
