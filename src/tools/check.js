function checkPhone (phone) {
  if (typeof phone !== 'string') {
    return false
  }
  return /^1[34578][0-9]{9}$/.test(trimStr(phone));
}

function checkEmail (email) {
  if (typeof email !== 'string') {
    return false
  }
  let reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
  return reg.test(trimStr(email))
}

function isEmpty (value) {
  return value === null || value === undefined || trimStr(value) === '';
}

function trimStr (str) {
  if (str === null || str === undefined) {
    return ''
  }
  if (typeof str !== 'string') {
    return String(str).replace(/(^\s*)|(\s*$)/g, '')
  }
  return str.replace(/(^\s*)|(\s*$)/g, '');
}

function cardValidate (card) {
  if (typeof card !== 'string') {
    return false
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
  const canUseWindow = typeof window !== 'undefined'
  let prompt = true;
  if (!isCorrectType('String', phoneNumber)) {
    console.log('the phone number must be provided as a String value');
    return;
  }

  if (!isCorrectType('Boolean', prompt)) {
    console.log('the prompt parameter must be a Boolean');
    return;
  }

  let url = 'tel:';
  // 浏览器环境不支持 telprompt，统一使用 tel 协议。
  if (!canUseWindow) {
    url = prompt ? 'telprompt:' : 'tel:';
  }

  url += phoneNumber;

  LaunchURL(url);
};

export const LaunchURL = function (url) {
  if (typeof window === 'undefined' || typeof window.open !== 'function') {
    console.warn('openURL is unavailable in current environment')
    return
  }
  window.open(url, '_self')
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