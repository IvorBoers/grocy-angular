import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../domain/product";
import {JumboService} from "../jumbo-service";
import {ProductData} from "../domain/product-data";
import {PrimaryView} from "../domain/image-info";
import {FilesService} from "../../../masterdata/files/files-service";
import {ProductService} from "../../../masterdata/product/product.service";

@Component({
  selector: 'app-jumbo-product',
  templateUrl: './jumbo-product.component.html',
  styleUrls: ['./jumbo-product.component.scss']
})
export class JumboProductComponent implements OnInit {

  @Input()
  product?: Product;
  @Input()
  jumboProductId?: string;

  jumboProduct?: ProductData;

  constructor(private jumboService: JumboService, private filesService: FilesService, protected productService: ProductService) { }

  ngOnInit(): void {
    if (this.jumboProductId) {
      this.jumboService.getProduct(this.jumboProductId)
        .subscribe(result => this.jumboProduct = result.product.data);
    }
  }

  updateProductPictureName(fileName: string): void {
    if (this.product) {
      console.log("updating product " + this.product.id + " with picture name: " + fileName)
      this.product.picture_file_name = fileName;
      this.productService.update(this.product);
    }
  }

  setAsGrocyProductPicture(image: PrimaryView) {
    if (this.jumboProduct && this.product) {
      let ext = image.url.substring(image.url.lastIndexOf('.') + 1)
      let fileName = "productpicture_jumbo_" + this.jumboProduct.id + '.' + ext
      let imageUrl = image.url.replace("https://static-images.jumbo.com", "/jumboimages")
      console.log("setAsGrocyProductPicture: fileName=" + fileName + ", imageUrl=" + imageUrl)
      this.filesService.downloadAndupload(FilesService.group_productpictures, fileName, imageUrl, () => this.updateProductPictureName(fileName))
    }
  }

  testDownload() {
    this.filesService.getTestFile("/jumboimages/product_images/130920211704_218376DS-1_360x360_2.png").subscribe(blob => console.log("response with blob"))
  }
}
