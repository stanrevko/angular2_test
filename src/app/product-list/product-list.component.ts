import { Component, OnInit } from '@angular/core';
import { Product  } from '../share/product';
import { ProductService  } from '../share/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[] ;

  constructor(private productService: ProductService) { }

 ngOnInit(){    
        this.products = this.productService.getData();        
  }

  AddToCart(event : Event, product){
    event.preventDefault();
  }
}
