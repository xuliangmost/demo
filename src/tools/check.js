let Linking = null;
let Platform = null;

try {
  // 保持兼容：在 RN 环境可用，在 Web 构建时不会因依赖缺失直接失败
  const rn = require('react-native');
  Linking = rn.Linking;
  Platform = rn.Platform;
} catch (e) {
  Linking = null;
  Platform = null;
}

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
  if (typeof value === 'string') {
    return trimStr(value) === '';
  }
  return false;
}

function trimStr (str) {
  return typeof str === 'string' ? str.replace(/(^\s*)|(\s*$)/g, '') : '';
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
  let prompt = true;
  if (!isCorrectType('String', phoneNumber)) {
    console.log('the phone number must be provided as a String value');
    return;
  }

  if (!isCorrectType('Boolean', prompt)) {
    console.log('the prompt parameter must be a Boolean');
    return;
  }

  let url;

  if (!Linking || !Platform) {
    console.warn('PhoneCall is only available in react-native environment');
    return;
  }

  if (Platform.OS !== 'android') {
    url = prompt ? 'telprompt:' : 'tel:';
  }
  else {
    url = 'tel:';
  }

  url += phoneNumber;

  LaunchURL(url);
};

const LaunchURL = function (url) {
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