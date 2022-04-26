import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-shopping';
  constructor(private store: Store<any>) {}

  cart: Observable<Array<any>> | undefined

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cart = this.store.select('cart')
    this.store.select('cart').subscribe(state=>this.cart = state)
  }
}
