import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {
  cart$:Observable<any>;
  items = [];
  userName;
  userId;
  shoppingCart: any;
  product: any;
  
  constructor (
    private shoppingCartService: ShoppingCartService,
    public Auth:AuthService,
    private orderService:OrderService,
    private router:Router,
    public alertController: AlertController
  ) { 
    Auth.userObs.subscribe(user=>{
       this.userName = user.displayName;
       this.userId = user.uid;
    })
  }

  async ngOnInit() { 
    this.cart$ = await this.shoppingCartService.getCartInit();
    this.cart$.subscribe(data=>{this.items = data.items;})
  }
 
  getQuantity(){
    if(!this.shoppingCart) return 0;
    let item = this.shoppingCart.items[this.product.key];
    return item? item.quantity : 0;
  }

  async addOrder() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Deseja realmente enviar este <strong>Pedido</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            return;
          }
        }, {
          text: 'OK',
          handler: () => {
            let order = {
              date : new Date().getTime(),
              items:this.items,
              userName:this.userName,
              userId:this.userId,
              isRead:false
            }
            this.orderService.placeOrder(order);
            this.router.navigate(['my-orders'])
            this.confirmAddOrder();
          }
        }
      ]
    });
    await alert.present();
  }

  async confirmAddOrder() {
    const alert = await this.alertController.create({
      header: 'Pedido enviado com sucesso!',
      buttons: [
        {
          text: 'OK',         
        }
      ]
    });
    await alert.present();
  }

  async clearCart() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Deseja realmente <strong>Excluir</strong> seus pedidos do carrinho?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            return;
          }
        }, {
          text: 'OK',
          handler: () => {
            this.shoppingCartService.clearCart();
            this.confirmClearCart();           
          }
        }
      ]
    });
    await alert.present();
  }

  async confirmClearCart() {
    const alert = await this.alertController.create({
      header: 'Os produtos foram removidos com sucesso!',
      buttons: [
        {
          text: 'OK',         
        }
      ]
    });
    await alert.present();
  }
  
}
