import { Injectable } from '@angular/core';
import { Product } from './product.class';

@Injectable()
export class CartService {
    private items: Product[] = [];
    
    getItems(): Product[]  {
        return this.items || [];
    }

    addItem(item) {        
        this.items.push(item);
        console.log('Cart: ', this.items);
    }

    removeItem(item){
        this.items.splice(this.items.indexOf(item),1);
    }

   
}