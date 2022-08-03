import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { KDVPipe } from './pipes/kdv/kdv.pipe';
import { SaleDirective } from './directives/sale/sale.directive';
import { CardClickDirective } from './directives/product-click/card-click.directive';
import { SearchPipe } from './pipes/search-product/search.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    HomepageComponent,
    NavbarComponent,
    ProductCardComponent,
    CategoryListComponent,
    RegisterComponent,
    CustomerComponent,
    EditCustomerComponent,
    KDVPipe,
    SaleDirective,
    CardClickDirective,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
