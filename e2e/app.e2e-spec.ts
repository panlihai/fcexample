import { AppPage } from './app.po';

describe('fcexample App', () => {
  let page: AppPage;

  Each(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
