import { JohnoxleyPage } from './app.po';

describe('johnoxley App', function() {
  let page: JohnoxleyPage;

  beforeEach(() => {
    page = new JohnoxleyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
