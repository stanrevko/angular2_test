import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { CartService  } from './CartService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService],
})
export class CartComponent implements OnInit {
  count: number;  
  items: any;
  
  constructor(private cart: CartService){    
    this.items = cart.getItems();
  }

  ngOnInit() {     
    this.count =0;    
    // this.items = this.cart.items; 
  }

  getItems(){
    return this.cart.getItems();
  }


}
