"use strict";

const calculateStats = arrAttLinks => new Promise((resolve, reject) => {
  if (arrAttLinks[0].status) {
    const statsValidate = calculateTotalAndUnique(arrAttLinks);
    const brokenTotal = arrAttLinks.filter(compare => compare.value === 'Fail').length;
    statsValidate.broken = brokenTotal;
    resolve(statsValidate);
  } else {
    const stats = calculateTotalAndUnique(arrAttLinks);
    resolve(stats);
  }
});

const calculateTotalAndUnique = arr => {
  const arrTotal = arr.length;
  let arrHref = [];
  arr.forEach(element => {
    arrHref.push(element.href);
  });
  const uniqueLength = arrHref.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual).length;
  const totalAndUnique = {
    total: arrTotal,
    unique: uniqueLength
  };
  return totalAndUnique;
};

module.exports = calculateStats;