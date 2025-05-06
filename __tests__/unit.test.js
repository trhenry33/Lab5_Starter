// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('check random', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('check funny', () => {
  expect(isPhoneNumber("696-969-6969")).toBe(true);
});

test('check 911', () => {
  expect(isPhoneNumber("911")).toBe(false);
});

test('check ahhhh', () => {
  expect(isPhoneNumber("9ahhhh")).toBe(false);
});

test('check my email', () => {
  expect(isEmail("trhenry@ucsd.edu")).toBe(true);
});

test('check other email', () => {
  expect(isEmail("coolguy@ucsd.edu")).toBe(true);
});
test('ccheck bad', () => {
  expect(isEmail("taxes")).toBe(false);
});
test('ccheck weird', () => {
  expect(isEmail("@@@@.com")).toBe(false);
});
test('check my pw, jk ', () => {
  expect(isStrongPassword("peepee")).toBe(true);
});
test('check def not mine ', () => {
  expect(isStrongPassword("peep")).toBe(true);
});
test('check bad ', () => {
  expect(isStrongPassword("poo")).toBe(false);
});
test('check bad2 ', () => {
  expect(isStrongPassword("pooppppppppppppppppppppppppp")).toBe(false);
});
test('check good ', () => {
  expect(isDate("12/12/1212")).toBe(true);
});
test('check good2 ', () => {
  expect(isDate("12/12/6969")).toBe(true);
});
test('check bad ', () => {
  expect(isDate("50/500/1212")).toBe(false);
});
test('check bad2 ', () => {
  expect(isDate("12/12/12120")).toBe(false);
});

test('check good ', () => {
  expect(isHexColor("#FFF")).toBe(true);
});
test('check good2 ', () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});
test('check bad ', () => {
  expect(isHexColor("23")).toBe(false);
});
test('check bad2 ', () => {
  expect(isHexColor("12/0/12120")).toBe(false);
});

