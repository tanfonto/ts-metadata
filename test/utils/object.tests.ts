import { test } from 'ava-ts';
import * as sinon from 'sinon';
import { merge, stub } from '../../src';

const { spy } = sinon;

test('stub() returns an object', t => {
  t.deepEqual(stub(), {});
});

test('objects returned by stub() are not shared, likely', t => {
  const one = stub();
  const two = stub();

  t.false(one === two);
});

test('merge dispatches to Object.assign', t => {
  const ref = spy(Object, 'assign');

  const one = {};
  const two = {};

  merge(one, two);

  const {
    args: { length, 1: a1, 2: a2 }
  } = ref.getCalls()[0];

  t.deepEqual(length, 3);
  t.true(one === a1);
  t.true(two === a2);

  ref.restore();
});
