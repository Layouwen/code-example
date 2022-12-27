import { add } from '../utils'

test('value equal', () => {
  expect(add(1, 2)).toBe(3)
})

test('reference type values are equal', () => {
  const target = { name: 'layouwen' }
  expect(target).toEqual({ name: 'layouwen' })
})

test('is null', () => {
  const target = null
  expect(target).toBeNull()
})

test('not is null', () => {
  const target = 1
  expect(target).not.toBeNull()
})

test('not defined', () => {
  let target
  expect(target).not.toBeDefined()
  expect(target).toBeUndefined()
})

test('is truthy', () => {
  const target = 1
  expect(target).toBeTruthy()
  expect(true).toBeTruthy()
  expect(false).not.toBeTruthy()
})

test('is falsy', () => {
  const target = 0
  expect(target).toBeFalsy()
  expect(false).toBeFalsy()
  expect(true).not.toBeFalsy()
})

test('number comparison', () => {
  const target = 1
  expect(target).toBeGreaterThan(0)
  expect(target).toBeGreaterThanOrEqual(1)
  expect(target).toBeLessThan(2)
  expect(target).toBeLessThanOrEqual(1)

  expect(0.1 + 0.2).toBeCloseTo(0.3)
})

test('match string', () => {
  const target = 'layouwen'
  expect(target).toMatch('la')
  expect(target).toMatch(/ouwen/)
  expect(target).not.toMatch(/fuck/)
})

test('array container', () => {
  const target = ['layouwen', 'avan']
  const setTarget = new Set(target)
  expect(target).toContain('layouwen')
  expect(setTarget).toContain('avan')
  expect(target).not.toContain('fuck')
})

test('throw error', () => {
  const target = () => {
    throw new Error('error message')
  }
  const notThrow = () => {
    return 'layouwen'
  }

  expect(target).toThrow()
  expect(target).toThrow('message')
  expect(target).toThrow(/^error/)
  expect(target).toThrow(/e$/)
  expect(notThrow).not.toThrow()
})
