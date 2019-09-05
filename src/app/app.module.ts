import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaTemplateFormComponent } from './pizza-template-form/pizza-template-form.component';
import { PizzaReactiveFormComponent } from './pizza-reactive-form/pizza-reactive-form.component';
import {PizzaListService} from './pizza-list.service';
import {APP_CONFIG} from './config';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    PizzaDetailComponent,
    PizzaListComponent,
    PizzaTemplateFormComponent,
    PizzaReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // 2 premières lignes, création d'un service à partir
    // d'une définition de classe
    // l'injecteur analyse le constructeur pour déterminer les dépendances
    PizzaListService,
    { provide: PizzaListService, useClass: PizzaListService },
    // Ici, on ne fait que créer un alias vers un autre service
    { provide: PizzaListService, useExisting: PizzaListService },
    // L'injecteur ne s'occupe pas de l'instanciation du service
    // la donnée étant déjà prête
    { provide: PizzaListService, useValue: { pizze: []} },
    { provide: APP_CONFIG.token, useValue: APP_CONFIG.value },
    // Il y a également la possibilité de définir nous même
    // la création du service
    { provide: PizzaListService, useFactory: (limit) => {
        const service = new PizzaListService();
        service.pizze.splice(limit);
        return service;
      }, deps: [5]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
