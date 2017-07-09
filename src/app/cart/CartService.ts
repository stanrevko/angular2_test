import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
    private items = [];
    getItems()  {
        return this.items || [];
    }

    addItem(item){        
        this.items.push(item);
        console.log('Cart: ', this.items);
    }

    removeItem(item){
        this.items.splice(this.items.indexOf(item),1);
    }

   
}