import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { enviroment } from 'src/Enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url:string=enviroment.BaseApi;

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get(this.url+"products")
  }

  getAllCategories(){
      return this.http.get(this.url+"products/categories")
  }

  getProductsByCtegories(cat:string){
    return this.http.get(this.url+"products/category/"+cat)
  }
  getProductDetailsById(id:number){
    return this.http.get(this.url+"products/"+id)
  }
  
}
