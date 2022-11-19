import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;
  cart$: Observable<any>;
  shoppingCartCount: number;

  constructor( 
    private shoppingCartService: ShoppingCartService
  ) { }

  async ngOnInit() { 
    this.cart$ = await this.shoppingCartService.getCartInit();
  }
  
}
