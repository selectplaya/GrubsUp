import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { FoodService, Food, SelectedFood} from "../../Services/FoodService";
import { MainDataService } from "../../Services/MainDataService";
import { Observable, timer} from 'rxjs';

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

  get selectedFoods(): string {
    let result = "";
    this.mainData.selectedFoods.forEach(s => {
      result = result + s + ",";
    });
    result = result.substring(0, result.length - 1);
    return result;
  }
  get isSelected(): boolean {
    if (this.mainData.selectedFoods.has(this.mainData.selectedFood.name)) {
      return true;
    }

    return this.mainData.selectedFood.isSelected;
  }
  set isSelected(value: boolean) {
    
    this.mainData.selectedFood.isSelected = value;
    if (value) {
      this.mainData.selectedFoods.add(this.mainData.selectedFood.name);
    } else {
      this.mainData.selectedFoods.delete(this.mainData.selectedFood.name);
    }
  }

  //get timers(): Observable<SelectedFood[]> {
  //  //let localTimers = SelectedFood[];
  //  //this.foods.subscribe(x => {
  //  //  x.forEach(y => {
  //  //    if ( this.mainData.selectedFoods.has(y.name)) {
  //  //      localTimers.push(y);
  //  //    }
  //  //  });
  //  //});

  //  //return localTimers;
  //  return this.mainData.foods;
  //}


//  get foods(): Observable<SelectedFood[]> {
//  return this.mainData.foods;
//}

  get selectedFood(): SelectedFood {
    return this.mainData.selectedFood;
  }


  constructor(public mainData: MainDataService, private router: Router) {
  }

  public showInfo(food: SelectedFood) {
    this.mainData.selectedFood = food;
  }

  public cook() {
    //var myTimer = timer(0, 1000);
    //myTimer.subscribe(time => {

    //  if (this.testCurrentTime > 0) {
    //    this.testCurrentTime = this.testOrgTime - time;
    //  } else {
    //    myTimer = null;
    //  }
    //});

    this.router.navigate(['./timer']);
  }

  public valueChange(food: SelectedFood, $event) {
  //set the two-way binding here for the specific unit with the event
    this.isSelected = !this.isSelected;
  }
}

