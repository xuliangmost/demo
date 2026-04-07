function checkPhone (phone) {
  return /^1[34578][0-9]{9}$/.test(trimStr(phone));
}

function checkEmail (email) {
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
  if (typeof window === 'undefined') {
    return;
  }

  const number = trimStr(phoneNumber);
  if (!number) {
    console.log('the phone number must be provided as a String value');
    return;
  }

  const telUrl = `tel:${number}`;
  if (window.location && typeof window.location.assign === 'function') {
    window.location.assign(telUrl);
  } else {
    window.location.href = telUrl;
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