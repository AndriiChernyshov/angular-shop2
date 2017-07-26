import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductType } from '../models/productType.model';

const PRODUCTS: Product[] = [
    { id: 1, name: 'Bread', price: 7.90, productType: ProductType.Food },
    { id: 2, name: 'Orange', price: 46.80, productType: ProductType.Food },
    { id: 3, name: 'Milk', price: 21.0, productType: ProductType.Beverage },
    { id: 4, name: 'Beer', price: 46.0, productType: ProductType.Beverage },
    { id: 5, name: 'Bicycle', price: 3000.0, productType: ProductType.Misc },
]

@Injectable()
export class ProductService {
    private products: Product[];

    constructor(){
        this.products = PRODUCTS;
    }

    public getAllProducts(): Promise<Product[]>{
        return Promise.resolve(this.products);
    }

    public findById(id: number | string): Promise<Product>{
        return this.getAllProducts()
            .then(products => products.find( prd => prd.id === +id))
            .catch(() => Promise.reject('Error in findById method'));
    }
}
