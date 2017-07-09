import { Component } from '@angular/core';
import { ProductService  } from './share/product.service';
import { CartService  } from './share/cart.service';
import { Product  } from './share/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, CartService],
})
export class AppComponent {
  title = 'My shop';
  author = "Staislav Revko";
  name : string;
  description: string;
  price: number;
  isAvailable: boolean;

  products : Product[] = [];

  ingredients = ["potato", "salad", "music", "salt"] ;

  onBuy = function(product: Product){
      this.cart.addItem(product);
 
  }

  constructor(private cart: CartService){
  }

  
}
