// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('isPhoneNumber - 6192121234', () => {
  expect(isPhoneNumber('6192121234')).toBe(false);
});
test('isPhoneNumber - (619)2121234', () => {
  expect(isPhoneNumber('(619)2121234')).toBe(false);
});
test('isPhoneNumber - (619)212-1234', () => {
  expect(isPhoneNumber('(619)212-1234')).toBe(true);
});
test('isPhoneNumber - (619) 212-1234', () => {
  expect(isPhoneNumber('(619) 212-1234')).toBe(true);
});

// isEmail
test('isEmail - ndtorres@ucsd.edu', () => {
  expect(isEmail('ndtorres@ucsd.edu')).toBe(true);
});
test('isEmail - a@a.com', () => {
  expect(isEmail('a@a.com')).toBe(true);
});
test('isEmail - ndtorres@ucsd.megagamer', () => {
  expect(isEmail('ndtorres@ucsd.megagamer')).toBe(false);
});
test('isEmail - ndtorres@ucsd.', () => {
  expect(isEmail('ndtorres@ucsd.')).toBe(false);
});

// isStrongPassword
test('isStrongPassword - 1234', () => {
  expect(isStrongPassword('1234')).toBe(false);
});
test('isStrongPassword - 123abcefg', () => {
  expect(isStrongPassword('123abcefg')).toBe(false);
});
test('isStrongPassword - alkudfa_123', () => {
  expect(isStrongPassword('alkudfa_123')).toBe(true);
});
test('isStrongPassword - WhereIsTheLamb', () => {
  expect(isStrongPassword('WhereIsTheLamb')).toBe(true);
});

// isDate
test('isDate - 12/15/1999', () => {
  expect(isDate('12/15/1999')).toBe(true);
});
test('isDate - 1/1/1969', () => {
  expect(isDate('1/1/1969')).toBe(true);
});
test('isDate - 69/420/69420', () => {
  expect(isDate('69/420/69420')).toBe(false);
});
test('isDate - 1-1-1', () => {
  expect(isDate('1-1-1')).toBe(false);
});

// isHexColor
test('isHexColor - #1', () => {
  expect(isHexColor('#1')).toBe(false);
});
test('isHexColor - #11111', () => {
  expect(isHexColor('#11111')).toBe(false);
});
test('isHexColor - #111', () => {
  expect(isHexColor('#111')).toBe(true);
});
test('isHexColor - #537257', () => {
  expect(isHexColor('#537257')).toBe(true);
});
// TODO - Part 2
