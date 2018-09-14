import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Food {
  public name: string;
  public description: string;
  public category: string;
  public image: string;
  public cookingMethods: string[];
  public baseTime: number;
  public timePerGram: number;
  public tempature: number;
  public portionSize: number;

}

@Injectable()
export class SelectedFood extends Food{
  public selectedCookingMethod: string;
  public weight: number;
  public selectedRarity: string;
  public isSelected: boolean;
  public waitTime: number;
  public cookingTime: number;
  public restTime: number;
}





@Injectable()
export class FoodService {
  constructor(
    private http: HttpClient
  ) { }

  getFoods() {
    //todo do not hard code url.... bad smelly code.
    return this.http.get<SelectedFood[]>( `http://localhost:2479/api/foods`);
  }
}

