const validateLink = require('../SRC/Models/validate.js');
const input = [{ href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2'}];
const input2 = [{ href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2'}]; 
const ouput = [{ href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2', status: 200, value: 'OK'}];
const ouput2 = [{ href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2', status: 404, value: 'Fail'}];

test('Debería retornar el objeto ingresado adicionando las propiedades status 200 y value OK', (done) => {
  validateLink(input).then((respuesta) => {
    expect(respuesta).toEqual(ouput);
    done();
  });
});

test('Debería retornar el objeto ingresado adicionando las propiedades status 404 y value Fail', (done) => {
  validateLink(input2).then((respuesta) => {
    expect(respuesta).toEqual(ouput2);
    done();
  });
});

// test('Debería retornar el objeto ingresado adicionando las propiedades status 200 y value OK', async() => {
//   const respuesta = await getStatus(input);
//   expect(respuesta).toEqual(ouput);
// });