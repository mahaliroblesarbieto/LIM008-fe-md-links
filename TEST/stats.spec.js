import {calculateStats} from '../SRC/Models/stats.js';

const input = [{ href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2'},
  {href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2'},
  {href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/Proyecto'},
  {href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo1'}];
const input2 = [{ href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2', status: 200, value: 'OK'},
  {href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2', status: 404, value: 'Fail'},
  {href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/Proyecto', status: 404, value: 'Fail'},
  {href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo1', status: 200, value: 'OK'}];

const ouput = {total: 4, unique: 2};
const ouput2 = {total: 4, unique: 2, broken: 2};

describe('calculateStats', () => {
  it('debería ser una función', () => {
    expect(typeof calculateStats).toBe('function');
  });
  it('Debería retornar el total de links y cuantos de los links no se repiten', () => {
    expect(calculateStats(input)).toEqual(ouput);
  });
  it('Debería retornar el total de links, cuantos de los links no se repiten y cuantos links son broken', () => {
    expect(calculateStats(input2)).toEqual(ouput2);
  });
});