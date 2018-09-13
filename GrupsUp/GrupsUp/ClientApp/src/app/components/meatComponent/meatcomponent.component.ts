import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { FoodService, Food, SelectedFood} from "../../Services/FoodService";
import { MainDataService } from "../../Services/MainDataService";
import { Observable } from 'rxjs';

@Component({
    selector: 'app-meatcomponent',
    templateUrl: 'meatcomponent.component.html',
    styleUrls: [ 'meatcomponent.component.css'],
})


export class MeatcomponentComponent {
  private name = 'MeatcomponentComponent';

  //we use get and set so we can persit the values to a service so the value perists if you chnage components.
  get test(): string {
    return this.mainData.testData;
  }
  set test(value: string) {
    this.mainData.testData = value;
  }

  get people(): number {
    return this.mainData.numberOfPortions;
  }
  set people(value: number) {
    this.mainData.numberOfPortions = value;
  }

  get isSelected(): boolean {
    return this.mainData.selectedFood.isSelected;
  }
  set isSelected(value: boolean) {
    
    this.mainData.selectedFood.isSelected = value;
  }

  private _foods: Observable<SelectedFood[]>;

  get foods(): Observable<SelectedFood[]> {
    return this._foods;
  }
  //set foods(value: Observable<Food[]>) {
  //  this.mainData.foods = value;
  //}

  get selectedFood(): SelectedFood {
    return this.mainData.selectedFood;
  }


  constructor(private mainData: MainDataService, private router: Router) {
    this._foods = this.mainData.foods;
  }

  public showInfo(food: SelectedFood) {
    this.mainData.selectedFood = food;
    //this.isSelected = this.mainData.selectedFood.isSelected;
  }

  public cook() {
    this.router.navigate(['./timer']);
  }

  public valueChange(food: SelectedFood, $event) {
  //set the two-way binding here for the specific unit with the event
    this.isSelected = !this.isSelected;
  }
}

