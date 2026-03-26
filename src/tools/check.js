function checkPhone (phone) {
  if (typeof phone !== 'string') {
    return false;
  }

  return /^1[34578][0-9]{9}$/.test(trimStr(phone));
}

function checkEmail (email) {
  if (typeof email !== 'string') {
    return false;
  }

  let reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
  return reg.test(trimStr(email))
}

function isEmpty (value) {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'string') {
    return trimStr(value) === '';
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  return false;
}

function trimStr (str) {
  if (str === null || str === undefined) {
    return '';
  }

  return String(str).replace(/(^\s*)|(\s*$)/g, '');
}

function cardValidate (card) {
  if (card === null || card === undefined) {
    return false;
  }

  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(trimStr(String(card)))
}

function getNowFormatDate () {
  let date = new Date();
  let seperator1 = "-";
  let seperator2 = ":";
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const strDate = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return date.getFullYear() + seperator1 + month + seperator1 + strDate
    + " " + hours + seperator2 + minutes + seperator2 + seconds;
}

const PhoneCall = function (phoneNumber) {
  let prompt = true;
  if (!isCorrectType('String', phoneNumber)) {
    console.log('the phone number must be provided as a String value');
    return;
  }

  if (!isCorrectType('Boolean', prompt)) {
    console.log('the prompt parameter must be a Boolean');
    return;
  }

  const isAndroid = typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent);
  const prefix = !isAndroid && prompt ? 'telprompt:' : 'tel:';
  const url = prefix + trimStr(phoneNumber);
  return LaunchURL(url);
};

const LaunchURL = function (url) {
  if (!isCorrectType('String', url) || isEmpty(url)) {
    return Promise.reject(new Error('The url must be a non-empty string'));
  }

  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Current environment does not support URL navigation'));
  }

  window.location.href = url;
  return Promise.resolve(true);
};

const isCorrectType = function (expected, actual) {
  return Object.prototype.toString.call(actual).slice(8, -1) === expected;
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