import { Injectable } from '@angular/core';
import { Product }    from '../share/product.class';
import { Products }   from './mock-products';

@Injectable()
export class ProductService {
    getData(): Product[]  {
        return Products;
    }

    getCategories(){
        
        


           
    }
}