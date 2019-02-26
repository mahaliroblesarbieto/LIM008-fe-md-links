export const extractHref = (arrAttrLink) => {
  let arrHref = [];
  for (let i = 0; i < arrAttrLink.length; i++) {
    arrHref.push(arrAttrLink[i].href);
  }
  return arrHref;
};

export const verifyLink = (arrHref) => {
  const status = ['status', 'ok'];
  return status;
};

export const addVerification = (arrStatus) => {
  const arrattrAndStatus = [{href: '', text: '', file: '', status: '', ok: ''}];
  return arrattrAndStatus;
};