import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Pizza Tonio!');
  });

  it('should navigate to pizza detail', () => {
    page.navigateTo();
    const navList = page.getNavList();
    expect(navList.count()).toBeGreaterThanOrEqual(3);
    navList.get(3).click();
    expect(page.getPizzaTitle()).toEqual('MARGHERITA');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
