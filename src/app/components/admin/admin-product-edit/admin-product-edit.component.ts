import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent implements OnInit {

  private id: number;
  private selectedProduct: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe(params => {this.id = params['id'];});
/*
    this.route.data.forEach( (data: {product: Product}) => {
        this.selectedProduct = Object.assign({}, data.product)
    }
    );
  */
    console.log(this.id);
  }

  ngOnInit() {
    console.log(this.route.data);
  }

}
