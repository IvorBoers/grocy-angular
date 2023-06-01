import {Component, Input, OnInit} from '@angular/core';
import {JumboRecipeSummary} from "../domain/jumbo-recipe-summary";

@Component({
  selector: 'app-jumbo-recipe-summary',
  templateUrl: './jumbo-recipe-summary.component.html',
  styleUrls: ['./jumbo-recipe-summary.component.scss']
})
export class JumboRecipeSummaryComponent implements OnInit {

  @Input()
  recipeSummary!: JumboRecipeSummary;

  constructor() { }

  ngOnInit(): void {
  }

}
