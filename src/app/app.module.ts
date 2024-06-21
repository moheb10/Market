import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {GetAllComponent} from './products/components/get-all/get-all.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { SelectComponent } from './shared/components/select/select.component';
import { ProductComponent } from './products/components/product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CardsComponent } from './cards/components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetAllComponent,
    SpinnerComponent,
    SelectComponent,
    ProductComponent,
    CardsComponent,
    ProductDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  exports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
