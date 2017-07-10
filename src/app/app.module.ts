import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductListModule } from './product-list/product-list.module';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartModel  } from './share/cart.model';
import { FiltersComponent } from './filters/filters.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FiltersComponent,
    CartItemComponent,    
  ],
  imports: [
    BrowserModule, 
    ProductListModule,
  ],
  providers: [CartModel],
  bootstrap: [AppComponent]
})
export class AppModule { 
 

}
