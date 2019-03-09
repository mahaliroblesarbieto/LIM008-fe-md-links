const showInCli = require('../cli.js');
const input = 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2';
const ouput =  
'c:\Users\Henry\Documents\javascript-proyecto-laboratoria\PROYECTO-PORTAFOLIO\LIM008-fe-md-links\TEST\carpetapadre\carpetahijo2, https://www.npmjs.com/package/link-check, Hola Mundo';
'c:\Users\Henry\Documents\javascript-proyecto-laboratoria\PROYECTO-PORTAFOLIO\LIM008-fe-md-links\TEST\carpetapadre\carpetahijo2, https://github.com/Laboratoria/LIM008-fe-md-links/src, chau';
const ouput2 =
'c:\Users\Henry\Documents\javascript-proyecto-laboratoria\PROYECTO-PORTAFOLIO\LIM008-fe-md-links\TEST\carpetapadre\carpetahijo2, https://www.npmjs.com/package/link-check, Hola Mundo, 200, OK';
'c:\Users\Henry\Documents\javascript-proyecto-laboratoria\PROYECTO-PORTAFOLIO\LIM008-fe-md-links\TEST\carpetapadre\carpetahijo2, https://github.com/Laboratoria/LIM008-fe-md-links/src, chau, 404, Fail';
const ouput3 =
'Total:2';
'Unique:2';
const ouput4 =
'Total:2';
'Unique:2';
'Broken:1';

describe('showInCli', () => {
  it('Debería ser una función', () => {
    expect(typeof showInCli).toBe('function');
  });
  it('Debería retornar los links encontrados dentro de la ruta', () => {
    expect(showInCli(input).toEqual(ouput));
  });
  it('Debería retornar los links encontrados dentro de la ruta con su respectivo status y el valor si es ok o fail', () => {
    expect(showInCli(input).toEqual(ouput2));
  });
  it('Debería retornar el total de links y cuantos son unicos o no se repiten', () => {
    expect(showInCli(input).toEqual(ouput3));
  });
  it('Debería retornar el total de links, cuantos son unicos y cuantos estan rotos', () => {
    expect(showInCli(input).toEqual(ouput4));
  });
});