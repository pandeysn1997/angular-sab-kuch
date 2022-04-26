import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PRODUCTS } from '../store/market';
import { Product } from '../store/product.model';
import { CartComponent } from '../cart/cart.component';
import * as Cart from "./../store/actions";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product:Product | undefined

  constructor(private route: ActivatedRoute, private store: Store<any>) { }

  ngOnInit() {
    this.route.params.subscribe((p)=>{
        let id = p['id']
        let result = Array.prototype.filter.call(PRODUCTS,(v)=>v.id == id)
        if (result.length > 0) {
          this.product = result[0]
        }
    })
  }
  // new Cart.AddProduct(product)
  addToCart(product: any) {
        var x = this.store.dispatch(new Cart.AddProduct(product));
        console.log(x);
  }

}
