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

  public testCurrentTime = 0;
  private isRunning : boolean = false;
  constructor(public mainData: MainDataService) {

  }

  public setTimer() {
    let longestTime = 0;
    this.mainData.foods2.forEach(x => {
      if (x.isSelected) {

        x.cookingTime = x.baseTime + (x.timePerGram * this.mainData.numberOfPortions * x.portionSize);

        if (longestTime <= x.cookingTime) {
          longestTime = x.cookingTime;
        }

      }
    });

    this.mainData.foods2.forEach(x => {
      if (x.isSelected) {
        x.waitTime = longestTime - x.cookingTime;
      }
    });
    this.testCurrentTime = longestTime;
  }

  public cook() {
    if (this.isRunning) {
      return;
    }
    this.setTimer();
    

    var myTimer = timer(0, 1000);
    myTimer.subscribe(time => {
      if (this.testCurrentTime > 0) {
        this.testCurrentTime = this.testCurrentTime - 1;
      }


        this.mainData.foods2.forEach(x => {
          if (x.isSelected) {
            if (x.waitTime > 0) {


              x.waitTime = x.waitTime - 1;
            } else {
              if (x.cookingTime > 0) {
                x.cookingTime = x.cookingTime - 1;
              }
            }
          }
        });

    });
    this.isRunning = true;
  }
}
