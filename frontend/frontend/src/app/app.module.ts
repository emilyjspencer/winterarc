import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { routes } from './app.routes';
import { ItemComponent } from './components/item/item.component';
import { ItemService } from './services/item.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [ BrowserModule, CommonModule, routes, HttpClient],
  declarations: [AppComponent, ItemComponent],
  providers: [ItemService, HttpClient, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}