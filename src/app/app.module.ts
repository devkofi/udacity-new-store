import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { HttpClientModule } from '@angular/common/http';
import { CartlistComponent } from './cartlist/cartlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductDisplayComponent,
    CartlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
