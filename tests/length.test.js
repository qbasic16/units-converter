import { length } from '../src/index.js'

const ACCURACY = 1 / 1000
const percentError = (expected, actual) => {
  return Math.abs((expected - actual) / actual)
}

test('ft to ft', () => {
  expect(length(1).from('ft').to('ft').value).toEqual(1)
})

test('ft to ft-us', () => {
  expect(length(1).from('ft').to('ft-us').value).toEqual(0.999998000004)
})

test('ft-us to ft', () => {
  expect(length(1).from('ft-us').to('ft').value).toEqual(1.000002)
})

test('in to in', () => {
  expect(length(7).from('in').to('in').value).toEqual(7)
})

test('ft to in', () => {
  expect(length(1).from('ft').to('in').value).toEqual(12)
})

test('in to ft', () => {
  expect(length(1).from('in').to('ft').value).toEqual(1 / 12)
})

test('ft to mi', () => {
  expect(length(1).from('ft').to('mi').value).toEqual(1 / 5280)
})

test('mi to ft', () => {
  expect(length(1).from('mi').to('ft').value).toEqual(5280)
})

test('nMi to mi', () => {
  expect(length(1).from('nMi').to('mi').value).toEqual(1.150780303030303)
})

test('m to m', () => {
  expect(length(1).from('m').to('m').value).toEqual(1)
})

test('m to cm', () => {
  expect(length(1).from('m').to('cm').value).toEqual(100)
})

test('cm to m', () => {
  expect(length(1).from('cm').to('m').value).toEqual(1 / 100)
})

test('m to mm', () => {
  expect(length(1).from('m').to('mm').value).toEqual(1000)
})

test('km to m', () => {
  expect(length(1).from('km').to('m').value).toEqual(1000)
})

// When converting between systems, expect < 0.1% error
test('m to ft', () => {
  expect(percentError(3.28084, length(1).from('m').to('ft').value)).toBeLessThanOrEqual(ACCURACY)
})

test('m to ft-us', () => {
  expect(percentError(3.28084, length(1).from('m').to('ft-us').value)).toBeLessThanOrEqual(ACCURACY)
})

test('mm to ft', () => {
  expect(percentError(0.00328084, length(1).from('mm').to('ft').value)).toBeLessThanOrEqual(ACCURACY)
})

test('nMi to m', () => {
  expect(percentError(1852, length(1).from('nMi').to('m').value)).toBeLessThanOrEqual(ACCURACY)
})

test('km to nMi', () => {
  expect(percentError(0.539956803, length(1).from('km').to('nMi').value)).toBeLessThanOrEqual(ACCURACY)
})

test('fathom to m', () => {
  expect(percentError(1.8288, length(1).from('fathom').to('m').value)).toBeLessThanOrEqual(ACCURACY)
})
