import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {ProductModel} from './product.model';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo: ProductModel;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(
      (response: ProductModel) => {
        this.albumInfo = response
        console.log(response)
      }
    )
  }

}
