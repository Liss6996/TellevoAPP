import { AppPage } from './app.po';

describe('pp1', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('inicio bienvenido', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Bienvenidos');
  });
});
