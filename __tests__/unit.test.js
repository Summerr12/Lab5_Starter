// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// npm test  ./__tests__/unit.test.js

// valid number
test('# legit', () => {
  expect(isPhoneNumber('415-353-9658')).toBe(true);
});

test('no area code', () => {
  expect(isPhoneNumber('213-7942')).toBe(true);
});

test('missing a digit', () => {
  expect(isPhoneNumber('415-123-965')).toBe(true);
});

test('missing area code', () => {
  expect(isPhoneNumber('123-7942')).toBe(false);
});

// valid email
test('asks if valid email', () => {
  expect(isEmail('bnhan@ucsd.edu')).toBe(true);
});

test('missing portion after @', () => {
  expect(isEmail('okay@.com')).toBe(false);
});

test('regular email', () => {
  expect(isEmail('ucsd@ucsd.edu')).toBe(false);
});

test('random value', () => {
  expect(isEmail('tester@')).toBe(true);
});

// Strong password
test('no numbers only lowercase', () => {
  expect(isStrongPassword('pokemongo@')).toBe(false);
});

test('random pressing', () => {
  expect(isStrongPassword('i!aoisjd2')).toBe(false);
});

test('regular password with number and special characters', () => {
  expect(isStrongPassword('benjaminnhan12@gmail.com')).toBe(true);
});

test('password with uppercase and @', () => {
  expect(isStrongPassword('@MCDONALDfriedrice')).toBe(true);
});

//Valid date
test('regular date', () => {
  expect(isDate('1/31/2000')).toBe(true);
});

test('impossible month', () => {
  expect(isDate('13/3/2000')).toBe(true);
});

test('- marks', () => {
  expect(isDate('1-31-2000')).toBe(true);
});

test('missing number', () => {
  expect(isDate('1/2000')).toBe(true);
});

// valid hex color
test('asks if hex color', () => {
  expect(isHexColor('#abcdef')).toBe(true);
});

test('asks if hex color', () => {
  expect(isHexColor('#630000')).toBe(true);
});

test('missing values', () => {
  expect(isHexColor('#')).toBe(true);
});

test('not a color', () => {
  expect(isHexColor('#0')).toBe(true);
});
