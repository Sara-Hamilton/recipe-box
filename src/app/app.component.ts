import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Recipes that use water';
  title = 'Recipe Box';

  // firstRecipe = {
  //   title: "coffee",
  //   ingredients: "coffee grounds, water",
  //   directions: "use coffee maker"
  // }
  recipes: Recipe[] = [
    new Recipe('coffee', 'coffee grounds, water', 'use coffee maker'),
    new Recipe('jello', 'jello mix, water', 'read the box'),
    new Recipe('hard boiled eggs', 'eggs, water', 'boil eggs for 12 minutes'),
  ]
}
