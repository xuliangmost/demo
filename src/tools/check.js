function checkPhone (phone) {
  return typeof phone === 'string' && /^1[34578][0-9]{9}$/.test(phone);
}

function checkEmail (email) {
  let reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
  return typeof email === 'string' && reg.test(email)
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
  const normalized = str === null || str === undefined ? '' : String(str);
  return normalized.replace(/(^\s*)|(\s*$)/g, '');
}

function cardValidate (card) {
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
  const env = getReactNativeEnv();
  if (!env) {
    console.warn('PhoneCall is only available in react-native env');
    return false;
  }
  const {Linking, Platform} = env;
  let prompt = true;
  if (!isCorrectType('String', phoneNumber)) {
    console.log('the phone number must be provided as a String value');
    return false;
  }

  if (!isCorrectType('Boolean', prompt)) {
    console.log('the prompt parameter must be a Boolean');
    return false;
  }

  let url;

  if (Platform.OS !== 'android') {
    url = prompt ? 'telprompt:' : 'tel:';
  }
  else {
    url = 'tel:';
  }

  url += phoneNumber;

  return LaunchURL(Linking, url);
};

const LaunchURL = function (Linking, url) {
  Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      console.log('Can\'t handle url: ' + url);
    } else {
      Linking.openURL(url)
        .catch(err => {
          if (url.includes('telprompt')) {
            // telprompt was cancelled and Linking openURL method sees this as an error
            // it is not a true error so ignore it to prevent apps crashing
            // see https://github.com/anarchicknight/react-native-communications/issues/39
          } else {
            console.warn('openURL error', err)
          }
        });
    }
  }).catch(err => console.warn('An unexpected error happened', err));
};

const getReactNativeEnv = function () {
  try {
    const {Linking, Platform} = require('react-native');
    return {Linking, Platform};
  } catch (e) {
    return null;
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