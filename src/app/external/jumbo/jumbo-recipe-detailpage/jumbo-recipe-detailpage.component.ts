import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JumboService} from '../jumbo-service';
import {RecipeData} from '../domain/jumbo-recipe-response';

@Component({
  selector: 'app-jumbo-recipe-detailpage',
  templateUrl: './jumbo-recipe-detailpage.component.html',
  styleUrls: ['./jumbo-recipe-detailpage.component.scss']
})
export class JumboRecipeDetailpageComponent implements OnInit {
  item?: RecipeData;

  constructor(private route: ActivatedRoute, protected service: JumboService) {
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.getRecipe(id).subscribe(response => this.item = response.recipe.data);
  }

}
