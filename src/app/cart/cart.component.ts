import { Component, OnInit } from '@angular/core';
import { Product } from '../share/product.class';
import { CartService  } from '../share/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],

})
export class CartComponent implements OnInit {  
  items: Product[];
  
  constructor(private cartService: CartService){       
  }

  ngOnInit() {           
    this.items = this.cartService.getItems();    
  }

  getItems(){
    return this.cartService.getItems();
  }

  onRemove(item: Product){
    this.cartService.removeItem(item);
  }

  getCount(){
    return this.items.length;
  }


}
