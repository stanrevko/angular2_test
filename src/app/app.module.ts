import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartService  } from './share/CartService';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 

}
