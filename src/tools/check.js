function checkPhone (phone) {
  if (phone === null || phone === undefined) {
    return false;
  }
  return /^1[34578][0-9]{9}$/.test(String(phone));
}

function checkEmail (email) {
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
  return String(str).replace(/(^\s*)|(\s*$)/g, '');
}

function cardValidate (card) {
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if (card === null || card === undefined) {
    return false;
  }
  return reg.test(String(card))
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
  if (!isCorrectType('String', phoneNumber)) {
    console.log('the phone number must be provided as a String value');
    return false;
  }
  const normalizedPhone = trimStr(phoneNumber);
  if (normalizedPhone === '') {
    return false;
  }

  if (typeof window !== 'undefined' && window.location) {
    window.location.href = `tel:${normalizedPhone}`;
    return true;
  }

  console.warn('PhoneCall only works in browser runtime.');
  return false;
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