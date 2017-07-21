import { AngularShop2Page } from './app.po';

describe('angular-shop2 App', () => {
  let page: AngularShop2Page;

  beforeEach(() => {
    page = new AngularShop2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
