import {InjectionToken} from '@angular/core';

export const APP_CONFIG_TOKEN = new InjectionToken('app.config');

export const APP_CONFIG_VALUE = 'api.dawan.fr';


export const APP_CONFIG = {
  token: new InjectionToken('app.config'),
  value: {
    host: 'api.dawan.fr',
    port: '8080'
  }
};
