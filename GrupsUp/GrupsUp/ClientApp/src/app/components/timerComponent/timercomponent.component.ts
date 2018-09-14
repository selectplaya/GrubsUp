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


  public testOrgTime = 10;
  public testCurrentTime = 10;

  constructor(public mainData: MainDataService) {


  }

  public cook() {
    var myTimer = timer(0, 1000);
    myTimer.subscribe(time => {

      if (this.testCurrentTime > 0) {
        this.testCurrentTime = this.testOrgTime - time;
      } else {
         myTimer = null;
      }
    });
   
  }
}
