import { Component, OnInit } from '@angular/core';
import { Product } from '../share/product';
import { CartService  } from '../share/CartService';


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


}
