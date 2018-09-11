import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import { MeatcomponentComponent } from './components/meatcomponent/meatcomponent.component';
 
const routes: Routes = [
  { path: '', component: MaincomponentComponent , pathMatch: 'full' },
  { path: 'dashboard', component: MaincomponentComponent },
  { path: 'meat', component: MeatcomponentComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
