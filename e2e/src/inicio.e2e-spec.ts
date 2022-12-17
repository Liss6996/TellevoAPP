import { browser, element, by } from 'protractor';

//se describe una unidad de prueba

describe('prueba 1 bienvenidos', () => {
    beforeEach(() => {
        browser.get('/');
    });
    // se ejecuta la prueba
    it('la pagina de inicio se muestra por defecto', () => {
        expect(element(by.css('.titulo')).getText()).toContain('667');
    });
});
