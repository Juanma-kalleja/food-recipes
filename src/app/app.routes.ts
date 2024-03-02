import { Routes } from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { DetailRecipeComponent } from './pages/detail-recipe/detail-recipe.component';

export const routes: Routes = [
    {path: '', component: RecipesComponent},
    {path: 'recipes', component: RecipesComponent},
    {path: 'recipes/:id', component: DetailRecipeComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
