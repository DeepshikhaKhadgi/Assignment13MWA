import { Assignment13Page } from './app.po';

describe('assignment13 App', function() {
  let page: Assignment13Page;

  beforeEach(() => {
    page = new Assignment13Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
