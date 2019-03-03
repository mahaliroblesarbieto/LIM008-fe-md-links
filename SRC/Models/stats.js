export const calculateStats = (arrAttLinks) => {
  const arrTotal = arrAttLinks.length;
  const objUnique = {};
  arrAttLinks.forEach(element => {
    if (objUnique[element.href]) {
      objUnique[element.href] += 1;
    } else {
      objUnique[element.href] = 1;
    }
  });
  const objUniqueTotal = (Object.keys(objUnique)).length;
  console.log(objUnique);
  const stats = {total: arrTotal, unique: objUniqueTotal};
  return stats;
};
