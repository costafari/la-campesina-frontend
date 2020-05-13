import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { PartialsComponent } from './partials/partials.component';
import { SidebarComponent } from './partials/components/sidebar/sidebar.component';
import { HeaderComponent } from './partials/components/header/header.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ItemsModule } from "./items/items.module";
import { ClientesListComponent } from './clientes-list/clientes-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PartialsComponent,
    SidebarComponent,
    HeaderComponent,
    ClientesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ItemsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
