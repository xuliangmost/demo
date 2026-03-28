import {isEmpty, trimStr} from '../check'

describe('tools/check', () => {
  it('isEmpty should handle null and undefined', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
  })

  it('isEmpty should only trim string values', () => {
    expect(isEmpty('   ')).toBe(true)
    expect(isEmpty('  a  ')).toBe(false)
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty(false)).toBe(false)
    expect(isEmpty({})).toBe(false)
  })

  it('trimStr should safely coerce non-string values', () => {
    expect(trimStr(null)).toBe('')
    expect(trimStr(undefined)).toBe('')
    expect(trimStr(123)).toBe('123')
  })
})
