import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a test recipe', 'this is the description', 'https://p1.pxfuel.com/preview/4/17/111/recipe-comisa-healthy-tomato.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
