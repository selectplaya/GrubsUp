import { Directive, Input, Output, EventEmitter, OnChanges, OnDestroy, Component, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { FoodService, Food, SelectedFood } from "../../Services/FoodService";
import { MainDataService } from "../../Services/MainDataService";
import { Subject, Observable, SubscriptionLike, timer } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';





@Component({
  selector: 'timercomponent',
  templateUrl: 'timercomponent.component.html',
  styleUrls: ['timercomponent.component.css'],
})
export class TimercomponentComponent {
  private name = 'TimercomponentComponent';


  foods: SelectedFood[] = [];

  public testOrgTime = 10000;
  public testCurrentTime = 10000;
  private isRunning : boolean = false;
  constructor(public mainData: MainDataService) {
    mainData.foods.subscribe(x => {
      this.foods = x;
    });

  }

  public cook() {
    if (this.isRunning) {
      return;
    }
    var myTimer = timer(0, 1000);
    myTimer.subscribe(time => {

 
      if (this.testCurrentTime > 0) {
        this.testCurrentTime = this.testOrgTime - time;

        this.mainData.foods2.forEach(x => {
          if (x.cookingTime > 0) {
            x.cookingTime = x.cookingTime - 1;
          }
        //this.foods.forEach(x => {
        //  if (x.cookingTime > 0) {
        //    x.cookingTime = x.cookingTime - 1;
        //  }
        
        });
      } else {
         myTimer = null;
      }

     
    });
    this.isRunning = true;
  }
}
