import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cartProducts: any = {};
  total: any = 0;
  success:boolean=false;
  ngOnInit(): void {
    this.getCartProducts();
    this.getCartTotal();
  }
constructor(private service:CardService){

}
  getCartProducts() {
    debugger;
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    debugger;
    console.log(this.cartProducts);
  }
  getCartTotal() {
    debugger;
    this.total = 0;
    // for (let x in this.cartProducts) {
    //   this.total +=
    //     this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    //   console.log('Total:' + this.total);
    // }

    for (let key in this.cartProducts) {
      if (this.cartProducts.hasOwnProperty(key)) {
        let product = this.cartProducts[key];
        this.total += product.item.price * product.quantity;
        console.log('Total: ' + this.total);
      }
    }
  }

  decreaseQuantity(index: number) {
    this.cartProducts[index].quantity--;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  detectQuantity(index: number) {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  inreaseQuantity(index: number) {
    this.cartProducts[index].quantity++;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  deleteItem(index: number) {
    debugger;
    let product = this.cartProducts[index];
    this.cartProducts.splice(index, 1);
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  addCart() {
    debugger;
    let products = this.cartProducts.map((i: any) => {
      return { productId: i.item.id, quantityItem: i.quantity };
    });
    let model = {
      userId: 5,
      date: new Date(),
      products: products,
    };
    this.service.addCart(model).subscribe(s =>{
    this.success=true;
    }
  ,err =>{
    alert(err)
  })
  }
}
