import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../Modules/product';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css'],
})
export class GetAllComponent implements OnInit {
  products: product[] = [];
  categories: any[] = [];
  loadSpainner:boolean=false;
  cartProducts:any[]=[];
  constructor(private prodService: ProductService) {}

  ngOnInit(): void {
    
    this.getProducts();
    this.getAllCategories();
  }
  getProducts() {
    this.loadSpainner=true
    this.prodService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loadSpainner=false;
      },
      (err) => {
        alert('error');
        this.loadSpainner=false
      }
    );
  }
  getAllCategories() {
    this.loadSpainner=true
    this.prodService.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        console.log(res);
        this.loadSpainner=false;

      },
      (err) => {
        alert(err.message);
        this.loadSpainner=false;
      }
    );
  }

  getProductsByCategory(event: any) {
    debugger;
    let cat = event.target.value;
    debugger;
    if (cat == "All") this.getProducts();
    else this.productsByCategory(cat);
    console.log(this.products);
    console.log(event.target.value);
  }
  productsByCategory(cat: string) {
    this.loadSpainner=true;
    this.prodService.getProductsByCtegories(cat).subscribe(
      (res: any) => {
        this.products = res;
        this.loadSpainner=false;
      },
      (err) => {
        alert(err.message);
        this.loadSpainner=false;
      }
    );
  }
  reciveCategory(event:any){
    this.getProductsByCategory(event);
  }
  addToCart(event:any){
    //JSON.stringify(); //send data
    //JSON.parse(); //Revice the data
    //localStorage.setItem("cart",JSON.stringify(event));
debugger;
    if("cart" in localStorage)
    {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      const id = event.item.id;
      var existItem = this.cartProducts.find(item => item.item.id == event.item.id);
      if(existItem){
       
        alert("this item already exist in your cart");
      }else{
        this.cartProducts.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))
      }
      
    }else{
      this.cartProducts.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    }
   
  }
}
