import { Component, ViewChild } from '@angular/core';
import { ProductService  } from './share/product.service';
import { CartModel  } from './share/cart.model';
import { CartComponent  } from './cart/cart.component';
import { Product  } from './share/product.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, CartModel],
})
export class AppComponent {
  title = 'My shop';
  author = "Staislav Revko";
  name : string;
  description: string;
  price: number;
  isAvailable: boolean;
  @ViewChild(CartComponent) cartComponent: CartComponent;


  products : Product[] = [];

  ingredients = ["potato", "salad", "music", "salt"] ;

 
  addToCart = function(product: Product){
     this.cartComponent.addItem(product);
  }
  

  
}
