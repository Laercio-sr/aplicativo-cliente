import { Component,  Input } from '@angular/core';
import { Product } from 'src/app/shared/product';
import { ShoppingCart } from 'src/app/shared/shopping-cart';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss'],
})
export class ProductQuantityComponent  {
  @Input() product:Product;
  @Input('shopping-cart') shoppingCart: ShoppingCart; 
  constructor (
    private cartService: ShoppingCartService
  ) { }  

  addToShoppingCart(){
    this.cartService.addToCart(this.product);
  }

  removeShoppingCart(){
    this.cartService.removeFromCart(this.product);
  }

  getQuantity(){
    if(!this.shoppingCart) return 0;
    let item = this.shoppingCart.items[this.product.key];
    return item? item.quantity : 0;
  }
}
