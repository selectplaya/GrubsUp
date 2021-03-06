import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Injectable} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {
  MatDialogModule, MatTabsModule, MatProgressBarModule, MatTableModule, MatButtonModule,
  MatCheckboxModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatToolbarModule,
  MatSidenavModule, MatListModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule }     from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import { MeatcomponentComponent } from './components/meatcomponent/meatcomponent.component';
import { TimercomponentComponent } from './components/timercomponent/timercomponent.component';
import { FoodService } from './Services/FoodService';
import { MainDataService } from './Services/MainDataService';
import { MinuteSecondsPipe } from './minuteSeconds.Pipe';

@NgModule({
  declarations: [
    AppComponent,
    MaincomponentComponent,
    MeatcomponentComponent,
    TimercomponentComponent,
    MinuteSecondsPipe,
  ],
  entryComponents:[],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule, MatTabsModule, MatProgressBarModule, MatTableModule, MatInputModule,
    MatFormFieldModule, MatButtonModule, MatCheckboxModule, BrowserAnimationsModule, MatGridListModule,
    MatCardModule, MatMenuModule, MatIconModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatListModule, AppRoutingModule,
    AppRoutingModule,
  ],
  providers: [FoodService, MainDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
