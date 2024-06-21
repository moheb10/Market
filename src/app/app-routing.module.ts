import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetAllComponent} from './products/components/get-all/get-all.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CardsComponent } from './cards/components/cards/cards.component';

const routes: Routes = [
  {path:"products",component:GetAllComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"cart",component:CardsComponent},
  {path:"**", redirectTo:"prodcuts",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
