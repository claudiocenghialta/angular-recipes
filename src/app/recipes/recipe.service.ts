import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()


   private recipes: Recipe[] = [
     new Recipe(
       'a test recipe',
      'this is the description',
       'https://p1.pxfuel.com/preview/4/17/111/recipe-comisa-healthy-tomato.jpg',
       [
         new Ingredient('Carne', 1),
         new Ingredient('Patate',30)
      ]
    ),
     new Recipe(
       'a new recipe ',
      'description',
       'https://p1.pxfuel.com/preview/4/17/111/recipe-comisa-healthy-tomato.jpg',
       [
         new Ingredient('Pesce', 5),
         new Ingredient('Spinaci',10)
       ]
     )
   ];
  
  constructor(private slService: ShoppingListService) {
    
  }


  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients :Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}