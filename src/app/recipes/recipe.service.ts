import { Recipe } from "./recipe.model";

export class RecipeService {
   private recipes: Recipe[] = [
    new Recipe('a test recipe', 'this is the description', 'https://p1.pxfuel.com/preview/4/17/111/recipe-comisa-healthy-tomato.jpg'),
    new Recipe('a new recipe ', 'description', 'https://p1.pxfuel.com/preview/4/17/111/recipe-comisa-healthy-tomato.jpg')
   ];
  
  getRecipes() {
    return this.recipes.slice();
  }
}