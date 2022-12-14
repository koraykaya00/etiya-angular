import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from 'src/app/models/product';

@Component({
  selector: 'etiya-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!:Product;
  @Output() onBtnClick:any = new EventEmitter();
  isTrue : boolean = true;
  onMouseColor : string = "yellow";
  onSaleText : string = "İndirimmm!!!"


  constructor() { }

  ngOnInit(): void {
  }

  addToCartEvent(){
    this.onBtnClick.emit(this.product);
  }

}
