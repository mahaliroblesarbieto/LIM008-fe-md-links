// const fetch = require('node-fetch');
// export const getStatus = (link) => new Promise((resolve, reject) => {
//   return fetch(link.href)
//     .then(response => {
//       link.status = response.status;
//       link.value = response.statusText;
//       resolve(link);
//     }).catch(err => {
//       link.status = '400';
//       link.value = 'Fail';
//       resolve(link);
//     });
// });
const linkCheck = require('link-check');

export const getStatus = (link) => {
  return new Promise((resolve, reject) => {
    linkCheck(link.href, (err, result) => {
      console.log(err, result);
      if (err) {
        link.status = 404;
        link.value = 'Fail';
        resolve(link);
      } else {
        if (result.statusCode >= 200 && result.statusCode < 400) {
          link.status = result.statusCode;
          link.value = 'OK';
          resolve(link);
        } else {
          link.status = result.statusCode;
          link.value = 'Fail';
          resolve(link);
        };
      }
    });
  });
};

