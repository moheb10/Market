import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../../Modules/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() data!: product;
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  amount: number = 0;
  Add() {
    debugger;
    const quantity = this.amount;
    this.item.emit({ item: this.data, quantity: this.amount });
  }
}
