import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { FoodService, Food, SelectedFood } from "../../Services/FoodService";
import { MainDataService } from "../../Services/MainDataService";
import { Observable } from 'rxjs';

@Component({
    selector: 'timercomponent',
    templateUrl: 'timercomponent.component.html',
    styleUrls: [ 'timercomponent.component.css'],
})
export class TimercomponentComponent {
  private name = 'TimercomponentComponent';

  constructor(public mainData: MainDataService) {

   
  }

  public cook() {
    
  }
}
