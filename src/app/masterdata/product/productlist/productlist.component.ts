import {Component, OnInit} from '@angular/core';
import {Product} from "../../../domain/product";
import {ProductService} from "../productservice/product.service";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  items: Product[];


  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAll().subscribe(all => {
      this.items = all;
    })
  }

}
