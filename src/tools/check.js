function checkPhone (phone) {
  return isCorrectType('String', phone) && /^1[34578][0-9]{9}$/.test(phone)
}

function checkEmail (email) {
  if (!isCorrectType('String', email)) {
    return false
  }
  const reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  return reg.test(trimStr(email))
}

function isEmpty (value) {
  if (value === null || value === undefined) {
    return true
  }
  return isCorrectType('String', value) && trimStr(value) === ''
}

function trimStr (str) {
  if (!isCorrectType('String', str)) {
    return ''
  }
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

function cardValidate (card) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return reg.test(card)
}

function getNowFormatDate () {
  const date = new Date()
  const seperator1 = '-'
  const seperator2 = ':'
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 1 && strDate <= 9) {
    strDate = '0' + strDate
  }
  return date.getFullYear() + seperator1 + month + seperator1 + strDate
    + ' ' + date.getHours() + seperator2 + date.getMinutes()
    + seperator2 + date.getSeconds()
}

const PhoneCall = function (phoneNumber, prompt = true) {
  if (!isCorrectType('String', phoneNumber) || trimStr(phoneNumber) === '') {
    console.log('the phone number must be provided as a non-empty String value')
    return
  }

  if (!isCorrectType('Boolean', prompt)) {
    console.log('the prompt parameter must be a Boolean')
    return
  }

  const url = 'tel:' + phoneNumber
  LaunchURL(url)
}

const LaunchURL = function (url) {
  if (typeof window === 'undefined' || !window.location) {
    console.warn('Can\'t open url in current environment: ' + url)
    return
  }
  window.location.href = url
}

const isCorrectType = function (expected, actual) {
  return Object.prototype.toString.call(actual).slice(8, -1) === expected
}

export {
  checkEmail,
  checkPhone,
  isEmpty,
  trimStr,
  cardValidate,
  getNowFormatDate,
  PhoneCall
}