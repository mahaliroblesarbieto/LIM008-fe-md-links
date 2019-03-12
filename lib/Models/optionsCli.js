"use strict";

const calculateStats = require('./stats.js');

const showInCli = (response, option = {}) => new Promise((resolve, reject) => {
  if (!option.stats) {
    if (response[0].status) {
      let thirdResult = '';
      response.forEach(element => thirdResult += `${element.file}, ${element.href}, ${element.text}, ${element.status}, ${element.value}\n`);
      resolve(thirdResult);
    } else {
      let fourthResult = '';
      response.forEach(element => fourthResult += `${element.file}, ${element.href}, ${element.text}\n`);
      resolve(fourthResult);
    }
  } else {
    if (response[0].status) {
      calculateStats(response).then(response => resolve(`Total:${response.total} \nUnique:${response.unique} \nBroken:${response.broken}`));
    } else {
      calculateStats(response).then(response => resolve(`Total:${response.total} \nUnique:${response.unique}`));
    }
  }
});

module.exports = showInCli; // const showInCli = (response) => {
//   if ((JSON.stringify(response))[0] === '{') {
//     if (response.broken) {
//       const firstResult = `Total:${response.total} \nUnique:${response.unique} \nBroken:${response.broken}`;
//       return firstResult;
//     } else {
//       const secondResult = `Total:${response.total} \nUnique:${response.unique}`;
//       return secondResult; 
//     }
//   } else {
//     if (response[0].status) {
//       let thirdResult = '';
//       response.forEach(element => 
//         thirdResult += `${element.file}, ${element.href}, ${element.text}, ${element.status}, ${element.value}\n`);
//       return thirdResult;
//     } else {
//       let fourthResult = '';
//       response.forEach(element => 
//         fourthResult += `${element.file}, ${element.href}, ${element.text}\n`);
//       return fourthResult;
//     }
//   }
// };
// const calculateStats = require('./stats.js');
// const showInCli = (response, option = {}) => new Promise((resolve, reject) => {
//   if (option.stats) {
//     console.log(response)
//     if (response[0].status) {
//       calculateStats(response)
//         .then(response => resolve(`Total:${response.total} \nUnique:${response.unique} \nBroken:${response.broken}`))
//     } else {
//       calculateStats(response)
//         .then(response => resolve(`Total:${response.total} \nUnique:${response.unique}`)) 
//     }
//   } else {
//     if (response[0].status) {
//       let thirdResult = '';
//       response.forEach(element => 
//         thirdResult += `${element.file}, ${element.href}, ${element.text}, ${element.status}, ${element.value}\n`);
//       resolve(thirdResult);
//     } else {
//       let fourthResult = '';
//       response.forEach(element => 
//         fourthResult += `${element.file}, ${element.href}, ${element.text}\n`);
//       resolve(fourthResult);
//     }
//   }
// });