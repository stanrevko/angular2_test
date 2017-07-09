import { Component } from '@angular/core';
import { ProductService  } from './ProductService';
import { CartService  } from './cart/CartService';
import { Product  } from './product';

enum Category {
  phones     = 1,
  computers  = 2,
  horses     = 3,
  vegetables = 4,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, CartService],
})
export class AppComponent {


  title = 'My shop';
  name : string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  products : Product[] = [];

  ingredients = ["potato", "salad", "music", "salt"] ;

  onBuy = function(product: Product){
      this.cart.addItem(product);
 
  }

  constructor(private productService: ProductService, private cart: CartService){
  }

  ngOnInit(){
        this.products = this.productService.getData();        
  }
}
