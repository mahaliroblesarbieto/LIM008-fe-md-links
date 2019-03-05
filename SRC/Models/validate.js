const fetch = require('node-fetch');

export const validateLink = (arr) => new Promise((resolve, reject) => {
  const linkStatus = arr.map(link => getStatus(link));
  resolve(Promise.all(linkStatus));
});

export const getStatus = (link) => new Promise((resolve, reject) => {
  return fetch(link.href)
    .then(response => {
      if (response.status >= 200 && response.status < 400) {
        link.status = response.status;
        link.value = 'OK';
        resolve(link);
      } else {
        link.status = response.status;
        link.value = 'Fail';
        resolve(link);
      }
    }).catch(err => {
      err.code = 404;
      err.message = 'Fail';
      link.status = err.code;
      link.value = err.message;
      resolve(link);
    });
});


