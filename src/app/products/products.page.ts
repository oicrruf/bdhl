import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss']
})
export class ProductsPage implements OnInit {
  products: any;
  movements: any;
  constructor() { }

  ngOnInit() {
    fetch('assets/data/products.json').then((res) => res.json()).then((json) => {
      console.log(json);
      this.products = json;
    });

    fetch('assets/data/movements.json').then((res) => res.json()).then((json) => {
      console.log(json);
      this.movements = json;
    });
  }

}
