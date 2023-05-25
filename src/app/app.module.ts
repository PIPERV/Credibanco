import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { HomeComponent } from './components/home/home.component';
import { UsersService } from './core/services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HeaderComponent } from './shared/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { CounterComponent } from './shared/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductSearchComponent,
    ProductCarouselComponent,
    ProductCategoriesComponent,
    HomeComponent,
    ProductDetailsComponent,
    HeaderComponent,
    CartComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
