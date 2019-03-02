const linkCheck = require('link-check');

export const getStatus = (link) => {
  return new Promise((resolve, reject) => {
    linkCheck(link.href, (err, result) => {
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
