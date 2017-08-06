import { BreakfastPage } from './app.po';

describe('breakfast App', () => {
  let page: BreakfastPage;

  beforeEach(() => {
    page = new BreakfastPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
