import {Component, Inject} from '@angular/core';
import {APP_CONFIG} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizza Tonio!';

  constructor(@Inject(APP_CONFIG.token) apiUrl) {}
}
