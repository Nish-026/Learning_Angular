import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[]=[
      new Recipe('Test 1',"This is just for testing","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8O5BaHdSCRyToCckfoAN4h3cGjwH8YQfhYjShrs5kAg&s")
    ]
    
    constructor(){}

    ngOnInit(){

    }
}
