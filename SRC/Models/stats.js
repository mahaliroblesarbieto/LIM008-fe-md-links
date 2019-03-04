export const calculateStats = (arrAttLinks) => {
  if (arrAttLinks[0].status) {
    console.log('entra');
    const arrTotal = arrAttLinks.length;
    let arrHref = [];
    arrAttLinks.forEach(element => {
      arrHref.push(element.href);
    });
    let arrUnique = arrHref.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
    const uniqueLength = arrUnique.length;
    const brokenTotal = (arrAttLinks.filter(compare => (compare.value === 'Fail'))).length;
    console.log(brokenTotal);
    const statsValidate = {total: arrTotal, unique: uniqueLength, broken: brokenTotal};
    return statsValidate;
  } else {
    const arrTotal = arrAttLinks.length;
    let arrHref = [];
    arrAttLinks.forEach(element => {
      arrHref.push(element.href);
    });
    let arrUnique = arrHref.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
    const uniqueLength = arrUnique.length;
    const stats = {total: arrTotal, unique: uniqueLength};
    return stats;
  }
};