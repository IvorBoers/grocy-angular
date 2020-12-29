import { Component, OnInit } from '@angular/core';
import {ShoppingLocationService} from "../shopping-location-service/shopping-location.service";
import {ShoppingLocation} from "../../../domain/shopping-location";

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss']
})
export class ShoplistComponent implements OnInit {

  items: ShoppingLocation[];

  constructor(private shopService: ShoppingLocationService) { }

  ngOnInit() {
    this.shopService.getAll().subscribe(all => {
      this.items = all;
    });
  }

}
