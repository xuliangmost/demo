function checkPhone (phone) {
  return /^1[34578][0-9]{9}$/.test(phone);
}

function checkEmail (email) {
  let reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
  return reg.test(email)
}

function isEmpty (value) {
  if (value === null || value === undefined) {
    return true;
  }
  return trimStr(String(value)) === '';
}

function trimStr (str) {
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
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  if (hours >= 0 && hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds >= 0 && seconds <= 9) {
    seconds = "0" + seconds;
  }
  return date.getFullYear() + seperator1 + month + seperator1 + strDate
    + " " + hours + seperator2 + minutes
    + seperator2 + seconds;
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

  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  const isAndroid = /Android/i.test(ua);
  let url = isAndroid ? 'tel:' : (prompt ? 'telprompt:' : 'tel:');
  url += phoneNumber;

  LaunchURL(url);
};

const LaunchURL = function (url) {
  if (typeof window === 'undefined') {
    console.warn('openURL error', new Error('window is undefined'));
    return;
  }

  try {
    window.location.href = url;
  } catch (err) {
    console.warn('openURL error', err);
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