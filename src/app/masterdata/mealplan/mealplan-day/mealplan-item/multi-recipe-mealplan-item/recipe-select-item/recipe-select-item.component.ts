import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeSummary} from '../../../../../../domain/recipe-summary';
import {AlertService} from '../../../../../../shared/alert-service';

@Component({
  selector: 'app-recipe-select-item',
  templateUrl: './recipe-select-item.component.html',
  styleUrls: ['./recipe-select-item.component.scss']
})
export class RecipeSelectItemComponent implements OnInit {

  @Input()
  recipe?: RecipeSummary;
  @Output()
  selectEvent = new EventEmitter();

  constructor( protected alertService: AlertService) {
  }

  ngOnInit() {
  }

  selectRecipe() {
    this.selectEvent.emit(this.recipe)
  }
}
