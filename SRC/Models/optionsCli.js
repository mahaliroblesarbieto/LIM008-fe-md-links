const showInCli = (response) => {
  if ((JSON.stringify(response))[0] === '{') {
    if (response.broken) {
      const firstResult = `Total:${response.total} \nUnique:${response.unique} \nBroken:${response.broken}`;
      return firstResult;
    } else {
      const secondResult = `Total:${response.total} \nUnique:${response.unique}`;
      return secondResult; 
    }
  } else {
    if (response[0].status) {
      let thirdResult = '';
      response.forEach(element => 
        thirdResult += `${element.file}, ${element.href}, ${element.text}, ${element.status}, ${element.value}\n`);
      return thirdResult;
    } else {
      let fourthResult = '';
      response.forEach(element => 
        fourthResult += `${element.file}, ${element.href}, ${element.text}\n`);
      return fourthResult;
    }
  }
};

module.exports = showInCli;