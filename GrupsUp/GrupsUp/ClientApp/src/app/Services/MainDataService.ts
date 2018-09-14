import { Directive, Input, Output, EventEmitter, OnChanges, OnDestroy, Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService, Food, SelectedFood } from "./FoodService";



@Injectable()
export class MainDataService {
  public testData: string;
  public foods: Observable<SelectedFood[]>;
  public selectedFoods: Set<string> = new Set<string>();
  public selectedFood: SelectedFood;
  public numberOfPortions: number = 1;


  constructor(private foodService: FoodService) {
   this.foods = foodService.getFoods();
  }
}
