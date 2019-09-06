import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getNavList() {
    return element.all(by.css('app-pizza-list nav a'));
  }

  getPizzaTitle() {
    return element(by.css('app-pizza-detail h1')).getText() as Promise<string>;
  }
}
