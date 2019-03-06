"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatus = exports.validateLink = void 0;

const fetch = require('node-fetch');

const validateLink = arr => new Promise((resolve, reject) => {
  const linkStatus = arr.map(link => getStatus(link));
  resolve(Promise.all(linkStatus));
});

exports.validateLink = validateLink;

const getStatus = link => new Promise((resolve, reject) => {
  return fetch(link.href).then(response => {
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

exports.getStatus = getStatus;