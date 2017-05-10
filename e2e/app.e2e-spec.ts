import { Angular4TemplateTypeFormsPage } from './app.po';

describe('angular4-template-type-forms App', function() {
  let page: Angular4TemplateTypeFormsPage;

  beforeEach(() => {
    page = new Angular4TemplateTypeFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
