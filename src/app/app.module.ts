import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaTemplateFormComponent } from './pizza-template-form/pizza-template-form.component';
import { PizzaReactiveFormComponent } from './pizza-reactive-form/pizza-reactive-form.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { PizzaCenterComponent } from './pizza-center/pizza-center.component';

registerLocaleData(localeFr, 'fr');

const appRoutes: Routes = [
  { path: 'pizze', component: PizzaListComponent},
  {
    path: 'pizze/create',
    component: PizzaTemplateFormComponent,
    data: { editMode: false }
  },
  {
    path: 'pizza/:name',
    component: PizzaCenterComponent,
    children: [
      {
        path: '',
        component: PizzaDetailComponent
      },
      {
        path: 'edit',
        component: PizzaTemplateFormComponent,
        data: { editMode: true}
      }
    ]
  },
  { path: '', redirectTo: 'pizze', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PizzaDetailComponent,
    PizzaListComponent,
    PizzaTemplateFormComponent,
    PizzaReactiveFormComponent,
    PizzaCenterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
