import {
  isEmpty,
  trimStr
} from './check'

describe('tools/check', () => {
  describe('trimStr', () => {
    test('null 和 undefined 返回空字符串', () => {
      expect(trimStr(null)).toBe('')
      expect(trimStr(undefined)).toBe('')
    })

    test('会将非字符串转换后去空格', () => {
      expect(trimStr(123)).toBe('123')
      expect(trimStr(true)).toBe('true')
    })
  })

  describe('isEmpty', () => {
    test('null/undefined/空白字符串视为空', () => {
      expect(isEmpty(null)).toBe(true)
      expect(isEmpty(undefined)).toBe(true)
      expect(isEmpty('   ')).toBe(true)
    })

    test('非空字符串与非字符串值不为空', () => {
      expect(isEmpty('abc')).toBe(false)
      expect(isEmpty(0)).toBe(false)
      expect(isEmpty(false)).toBe(false)
      expect(isEmpty({})).toBe(false)
    })
  })
})
