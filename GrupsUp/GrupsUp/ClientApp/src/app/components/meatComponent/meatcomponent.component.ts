import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { FoodService, Food } from "../../Services/FoodService";
import { MainDataService } from "../../Services/MainDataService";
import { Observable } from 'rxjs';

@Component({
    selector: 'app-meatcomponent',
    templateUrl: 'meatcomponent.component.html',
    styleUrls: [ 'meatcomponent.component.css'],
})


export class MeatcomponentComponent {
  private name = 'MeatcomponentComponent';
  get test(): string {
    return this.mainData.testData;
  }
  set test(value: string) {
    this.mainData.testData = value;
  }

  constructor(private mainData: MainDataService) {

  }
}

