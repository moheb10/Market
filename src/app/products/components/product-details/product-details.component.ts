import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  data: any = {};
  loadSpainner:boolean=false;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getProductDetails();

  }

  getProductDetails() {
  this.loadSpainner=true;

    this.productService.getProductDetailsById(this.id).subscribe((res) => {
   this.loadSpainner=false;
      this.data = res;
    },(err) => {
      alert(err)
    });
  }
}
