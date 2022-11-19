import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  subscription:Subscription;
  categoriesObs;
  filterdCategory;
  cart;
  products: Product [] = [];
  filteredProducts: Product [] = [];

  constructor (
    private productService:ProductService,
    private categoriesService: CategoryService,
    private shoppingCartService: ShoppingCartService
  ) {
    this.categoriesObs = this.categoriesService.getCategories()
    this.subscription = this.productService.getAll().subscribe((products: Product[])=>{ this.products = products; this.filterCategory() }); 
    }

  async ngOnInit() {
    this.subscription = this.productService.getAll().subscribe((products: Product[])=>{this.filteredProducts = this.products = products});
    (await this.shoppingCartService.getCart()).valueChanges().subscribe(value=> this.cart = value);
  }

  applyFilter(value:string){
    this.filteredProducts = (value)? this.products.filter(p => p.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())):
    this.products
  }
  
  filterCategory(){
    console.log(this.filterdCategory);
    this.filteredProducts = (this.filterdCategory) ? 
    this.products.filter(p => p.cat === this.filterdCategory) : 
    this.products;
  }

}
