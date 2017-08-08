import { DoppelgunnerPage } from './app.po';

describe('doppelgunner App', () => {
  let page: DoppelgunnerPage;

  beforeEach(() => {
    page = new DoppelgunnerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
