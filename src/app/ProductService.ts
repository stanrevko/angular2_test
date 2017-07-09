import { Injectable } from '@angular/core';
import { Product }    from './product';
import { Products }   from './mock-products';

@Injectable()
export class ProductService {
    getData(): Product[]  {
        return Products;
    }
}