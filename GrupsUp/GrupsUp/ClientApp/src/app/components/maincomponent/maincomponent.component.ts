import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { FoodService, Food, SelectedFood} from "../../Services/FoodService";
import { MainDataService } from "../../Services/MainDataService";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent {
  //foods: Observable<Food[]>;
  /** Based on the screen size, switch from standard to one column per row */
 

  //get foods(): Observable<SelectedFood[]> {
  //  return this.mainData.foods;
  //}
  //set foods(value: Observable<SelectedFood[]>) {
  //  this.mainData.foods = value;
  //}

  constructor(private breakpointObserver: BreakpointObserver,
    private mainData: MainDataService) {
  }
}
