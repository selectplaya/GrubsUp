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

  //get isSelected(): boolean {
  //  return this.mainData.selectedFood.isSelected;
  //}
//  public get foodTimers(): FoodTimer[]{

//    let localTimers
//      = FoodTimer[] ;
//    this.foods.subscribe(x => x.map(y => {
//      var t = new FoodTimer();
//      t.name = y.name;
//      t.cookingTime = (y.TimePerGram * y.PortionSize * this.numberOfPortions) + y.BaseTime;
//      localTimers.push(t);
//    }));
//    return localTimers;
//}
  constructor(private foodService: FoodService) {
    this.foods = foodService.getFoods();
    //foodService.getFoods().subscribe(x => 
    //   {
    //  const docsData = SelectedFood[];
    //  x.forEach(y => {
    //    y.cookingTime = 444;
    //    docsData.push(y);
    //  });

    //     this.foods = docsData;
    //   });
   // this.foods.forEach(x => x.forEach(y => y.cookingTime = 5);
  }
}
