import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IRecipeInfo } from '../../models/recipe.model';

@Component({
  selector: 'app-detail-recipe',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './detail-recipe.component.html',
  styleUrl: './detail-recipe.component.css'
})
export class DetailRecipeComponent implements OnInit{

  // para leer la url de donde estamos
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);

  private _apiService = inject(ApiService);
  id? : number;
  recipeInfo? : IRecipeInfo;

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      console.log(params['id']);
      this._apiService.getRecipeInfo(params['id']).subscribe((data:IRecipeInfo)=>{
        this.recipeInfo = data;
      })
      console.log(this.recipeInfo?.extendedIngredients);
    })
  }

}
