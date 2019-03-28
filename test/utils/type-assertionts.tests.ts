import { test } from 'ava-ts';
import { isNil, isObject } from '../../src';

test('isNil is true if fed with null', t => {
  const actual = isNil(null);
  t.true(actual);
});

test('isNil is true if fed with undefined', t => {
  const actual = isNil(undefined);
  t.true(actual);
});

test('isNil is false if fed with object', t => {
  const actual = isNil({});
  ``;
  t.false(actual);
});

test('isNil is false if fed with primitive', t => {
  const actual = isNil(42);
  t.false(actual);
});

test('isObject() perceives object literal as object', t => {
  t.true(isObject({}));
});

test('isObject() considers object created with object literal an object', t => {
  t.true(isObject(Object.create(null)));
});

test('isObject() perceives object created with custom constructor as object', t => {
  class Custom {}
  t.true(isObject(new Custom()));
});

// function is(t, type: string, val: any) {
//   t.true(isType(type)(val));
// }
//
// test('', is, 'string', '');
// test('', is, 'object', {});
// test('', is, 'function', console.log);
// test('', is, 'number', 42);
