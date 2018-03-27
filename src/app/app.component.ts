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

  recipes: Recipe[] = [
    new Recipe('coffee', 'coffee grounds, water', 'use coffee maker'),
    new Recipe('jell-o', 'jello mix, water', 'read the box'),
    new Recipe('hard boiled eggs', 'eggs, water', 'boil eggs for 12 minutes'),
    new Recipe('hot dogs', 'hot dogs, water', 'boil them until they fall apart'),
    new Recipe('hot chocolate', 'cocoa powder, water, milk', 'microwave it'),
    new Recipe('frozen water', '8-12 cups water', 'boil it, then freeze to save for later'),
    new Recipe('ramen', 'ramen packet, msg, salt', 'remove plastic, then boil it, duh'),
    new Recipe('crystal light', 'crystal light packet, water', 'add 4 crystal light packs to 16oz water')
  ]

  showDetails(clickedRecipe) {
    this.detailedRecipe = clickedRecipe;
  }

  hideDetails(clickedRecipe) {
    this.detailedRecipe = null;
  }

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  // let newRecipe = null;
  // showRecipeForm() {
  //   newRecipe = true;
  // }

  createRecipe(recipeTitle, ingredients, directions) {
    let newRecipe = new Recipe(recipeTitle, ingredients, directions);
    this.recipes.push(newRecipe);
  }



  selectedRecipe: Recipe = null;
  detailedRecipe: Recipe = null;

}
