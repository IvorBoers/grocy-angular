import {Component, OnInit} from '@angular/core';
import {BarcodeService} from "../../masterdata/barcode/barcode.service";
import {JumboService} from "../../external/jumbo/jumbo-service";
import {UserfieldsService} from "../../shared/userfields-service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-jumboid-setter',
  templateUrl: './jumboid-setter.component.html',
  styleUrls: ['./jumboid-setter.component.scss']
})
export class JumboidSetterComponent implements OnInit {
  busy = false;
  totalBarcodes = -1;
  currentBarcodeIndex = -1;
  updatedProducts = 0;
  private userfieldsService: UserfieldsService;

  constructor(protected barcodeService: BarcodeService, protected jumboService: JumboService, http: HttpClient) {
    this.userfieldsService = new UserfieldsService(http, "products");
  }

  ngOnInit(): void {
  }

  start(): void {
    this.busy = true;
    this.updatedProducts = 0
    this.currentBarcodeIndex = 0
    this.barcodeService.getAll().subscribe(response => {
      this.totalBarcodes = response.length;
      response.forEach(b => {

        this.jumboService.searchProducts(b.barcode).subscribe(jp => {
          if (jp.products.data.length > 0) {
            let jumboId = jp.products.data[0].id;

            this.userfieldsService.getOne(b.product_id).subscribe(u => {
              let jumboIdArray = []
              if (u.jumboId) {
                  jumboIdArray = u.jumboId.split(',')
              }
              if (!jumboIdArray.includes(jumboId)) {
                if (u.jumboId) {
                  u.jumboId = u.jumboId + ',' + jumboId;
                } else {
                  u.jumboId = jumboId;
                }
                this.userfieldsService.update(b.product_id, u).subscribe(() => {
                  this.currentBarcodeIndex++
                  this.updatedProducts++;
                });
              } else {
                this.currentBarcodeIndex++
              }
            })
          } else {
            this.currentBarcodeIndex++
          }
        })
      })
      this.busy = false;
    })
  }

}
