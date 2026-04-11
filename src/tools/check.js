function checkPhone (phone) {
  if (!isCorrectType('String', phone)) {
    return false;
  }

  return /^1[3-9][0-9]{9}$/.test(trimStr(phone));
}

function checkEmail (email) {
  if (!isCorrectType('String', email)) {
    return false;
  }

  let reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
  return reg.test(trimStr(email))
}

function isEmpty (value) {
  if (value === null || value === undefined) {
    return true;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (isCorrectType('String', value)) {
    return trimStr(value) === '';
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
  if (!isCorrectType('String', card) && !isCorrectType('Number', card)) {
    return false;
  }

  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(trimStr(card))
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
  let prompt = true;
  if (!isCorrectType('String', phoneNumber)) {
    console.log('the phone number must be provided as a String value');
    return false;
  }

  if (!isCorrectType('Boolean', prompt)) {
    console.log('the prompt parameter must be a Boolean');
    return false;
  }

  if (!prompt) {
    // Keep parameter contract for compatibility.
  }

  let url = 'tel:' + trimStr(phoneNumber);

  return LaunchURL(url);
};

const LaunchURL = function (url) {
  if (typeof window === 'undefined' || typeof window.location === 'undefined') {
    return false;
  }

  try {
    window.location.href = url;
    return true;
  } catch (err) {
    console.warn('openURL error', err);
    return false;
  }
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