function checkPhone (phone) {
  if (typeof phone !== 'string') {
    return false;
  }
  return /^1[34578][0-9]{9}$/.test(phone);
}

function checkEmail (email) {
  if (typeof email !== 'string') {
    return false;
  }
  let reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
  return reg.test(email)
}

function isEmpty (value) {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'string') {
    return trimStr(value) === '';
  }
  return false;
}

function trimStr (str) {
  if (str === null || str === undefined) {
    return '';
  }
  if (typeof str !== 'string') {
    return String(str).replace(/(^\s*)|(\s*$)/g, '');
  }
  return str.replace(/(^\s*)|(\s*$)/g, '');
}

function cardValidate (card) {
  if (typeof card !== 'string') {
    return false;
  }
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(card)
}

function getNowFormatDate () {
  let date = new Date();
  let seperator1 = "-";
  let seperator2 = ":";
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return date.getFullYear() + seperator1 + month + seperator1 + strDate
    + " " + date.getHours() + seperator2 + date.getMinutes()
    + seperator2 + date.getSeconds();
}

const PhoneCall = function (phoneNumber) {
  if (typeof phoneNumber !== 'string') {
    console.log('the phone number must be provided as a String value');
    return;
  }
  const cleanedPhone = trimStr(phoneNumber);
  if (!cleanedPhone) {
    return;
  }
  LaunchURL(`tel:${cleanedPhone}`);
};

const LaunchURL = function (url) {
  if (typeof window === 'undefined') {
    return;
  }
  if (typeof window.open === 'function') {
    window.open(url, '_self');
    return;
  }
  window.location.href = url;
};

export {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate,
  getNowFormatDate,
  PhoneCall
}