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

    public deleteProduct(id: number | string): void{
       
        let i = -1;
        this.products.forEach((item, index) => {
            if(item.id == id){
                i = index;
                return false;
            }
        });

        if( i > -1){
            this.products.splice(i, 1);
        }
    }

    public addProduct(product: Product): void{
       let maxId = 1;
       
       if(this.products.length > 0){
           this.products.forEach((item) => {
               maxId = item.id > maxId ? item.id : maxId;
           });
           maxId+=1;
       }

       product.id = maxId;
       this.products.push(product);
    }

    public updateProduct(product: Product): void{
        this.findById(product.id).then((prd) => {
            if(prd){
                prd.name = product.name;
                prd.price = product.price;
            }
        });
    }
}
