import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipeInfo, IRecipes } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlBase: string = 'https://api.spoonacular.com/recipes/';
  // private urlBaseById: string = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=False`;
  private apiKey: string = '30c21a40b78741dd918d425822f8d843';
  private query?: string;

  getRecipes(query: string): Observable<IRecipes>{
    return this._http.get<IRecipes>(`${this.urlBase}complexSearch?apiKey=${this.apiKey}&query=${query}&number=100`);
  }

  getRecipeInfo(id: number | string): Observable<IRecipeInfo>{
    return this._http.get<IRecipeInfo>(`${this.urlBase}${id}/information?apiKey=${this.apiKey}&includeNutrition=False`);
  }
}
