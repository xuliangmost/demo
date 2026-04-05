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
  if (isCorrectType('String', value)) {
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
  if (!isCorrectType('String', phoneNumber)) {
    console.log('the phone number must be provided as a String value');
    return Promise.resolve(false);
  }
  return LaunchURL('tel:' + trimStr(phoneNumber));
};

const LaunchURL = function (url) {
  if (typeof window !== 'undefined' && window.location) {
    window.location.href = url;
    return Promise.resolve(true);
  }

  const runtimeLinking = typeof global !== 'undefined' ? global.Linking : null;
  if (runtimeLinking && runtimeLinking.canOpenURL) {
    return runtimeLinking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
        return false;
      }
      return runtimeLinking.openURL(url)
        .then(() => true)
        .catch(err => {
          console.warn('openURL error', err);
          return false;
        });
    }).catch(err => {
      console.warn('An unexpected error happened', err);
      return false;
    });
  }

  console.warn('Current runtime does not support URL launch.');
  return Promise.resolve(false);
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