import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/Enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }
  addCart(model:any){
    return this.http.post(enviroment.BaseApi+"carts",model);
  }
}
