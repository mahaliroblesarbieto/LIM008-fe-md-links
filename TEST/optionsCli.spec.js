const showInCli = require('../SRC/Models/optionsCli.js');
const path = require('path');

const input = [{ href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2'},
  { href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2'}];
const input2 = [{ href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2', status: 200, value: 'OK'},
  { href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2', status: 404, value: 'Fail'}];
const input3 = {total: 2, unique: 2};
const input4 = {total: 2, unique: 2, broken: 1};

const ouput = 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2, https://www.npmjs.com/package/link-check, Hola Mundo\nC:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2, https://github.com/Laboratoria/LIM008-fe-md-links/src, chau\n';
const ouput2 = 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2, https://www.npmjs.com/package/link-check, Hola Mundo, 200, OK\nC:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2, https://github.com/Laboratoria/LIM008-fe-md-links/src, chau, 404, Fail\n';
const ouput3 =
'Total:2 \nUnique:2';
const ouput4 =
'Total:2 \nUnique:2 \nBroken:1';

describe('showInCli', () => {
  it('Debería ser una función', () => {
    expect(typeof showInCli).toBe('function');
  });
  it('Debería retornar los links encontrados dentro de la ruta', () => {
    expect(showInCli(input)).toEqual(ouput);
  });
  it('Debería retornar los links encontrados dentro de la ruta con su respectivo status y el valor si es ok o fail', () => {
    expect(showInCli(input2)).toEqual(ouput2);
  });
  it('Debería retornar el total de links y cuantos son unicos o no se repiten', () => {
    expect(showInCli(input3)).toEqual(ouput3);
  });
  it('Debería retornar el total de links, cuantos son unicos y cuantos estan rotos', () => {
    expect(showInCli(input4)).toEqual(ouput4);
  });
});