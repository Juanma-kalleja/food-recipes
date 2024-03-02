import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IRecipes, IResult } from '../../models/recipe.model';
import { Router } from '@angular/router';
import { SearchComponent } from "../../components/search/search.component";
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-recipes',
    standalone: true,
    templateUrl: './recipes.component.html',
    styleUrl: './recipes.component.css',
    imports: [SearchComponent, CommonModule, FontAwesomeModule]
})
export class RecipesComponent implements OnInit{
  iconCook = faKitchenSet;
  iconSad = faSadTear;
  query: string = '';
  recipesList: IResult[] = [];
  receivedSearch: string = '';
  loading: boolean = true;

  //Pagination:
  totalItems: number = 100;
  pageSize: number = 6;
  currentPage: number = 0;

  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    // this.getRecipesBySearch(this.query);
    // this._apiService.getRecipes(this.query).subscribe((data: IRecipes)=>{
    //   this.recipesList = data.results;
    //   console.log(this.recipesList);
    // })
    // this.loading = false;
  }

  getRecipesBySearch(query: string) {
    this.loading = false;
    this._apiService.getRecipes(query).subscribe((data: IRecipes)=>{
      this.recipesList = data.results;
      console.log(this.recipesList);
    })
  }

  // Method to navigate to recipe detail
  navigate(id: number | string) {
    this._router.navigate(['/recipes', id]);
  }

  receiveSearch(search: string) {
    this.receivedSearch = search;
    this.getRecipesBySearch(this.receivedSearch);
  }

  displayList(page: number) {
    const start = this.pageSize + (page-1);
    const end = start + this.pageSize;
    console.log(this.recipesList?.slice(start, end));
    return this.recipesList?.slice(start, end);
  }

  setPagination() {
    const page_count = Math.ceil(this.recipesList?.length/ this.pageSize);
    return Array.from({length: page_count},(_,i)=>i+1);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
