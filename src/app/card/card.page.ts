import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  id = null;
  card: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    fetch('assets/data/products.json').then((res) => res.json()).then((json) => {
      const cardFiltered = json.filter((c: { productNumber: any }) => c.productNumber === this.id)[0];
      this.card = cardFiltered;
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  pay() {
    console.log('Pagar');
  }

}
