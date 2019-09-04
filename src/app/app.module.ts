import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaTemplateFormComponent } from './pizza-template-form/pizza-template-form.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    PizzaDetailComponent,
    PizzaListComponent,
    PizzaTemplateFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
