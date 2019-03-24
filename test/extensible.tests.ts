import { test } from 'ava-ts';
import { METADATA } from '../global';
import { extensible } from '../src/extensible';
import { prop } from '../src/observable-property/decorator';

const { getPrototypeOf } = Object;

@extensible()
class Plain {}

class XPlain extends Plain {}

@extensible()
class Annotated {
  @prop(x => x)
  public prop1: any;

  @prop(x => x)
  public prop2: any;

  @prop(x => x)
  public prop3: any;
}

@extensible()
class Extended {
  @prop(_ => 42)
  public prop: any;
}

test('extensible retains constructor prototype reference', t => {
  const instance = new Plain();
  t.true(instance instanceof Plain);
});

test('extensible retains prototype reference in child constructor', t => {
  const instance = new XPlain();

  t.true(instance instanceof XPlain);
});

test('extensible retains parent prototype reference in child constructor', t => {
  const instance = new XPlain();

  t.true(instance instanceof Plain);
});

test('extensible does not interfere with prototype chain', t => {
  t.deepEqual(getPrototypeOf(XPlain.prototype), Plain.prototype);
});

test('extensible defines metadata symbol on objects created with annotated constructor', t => {
  const instance = new Annotated();

  t.truthy(instance[METADATA]);
});

test('extensible defines metadata symbol on objects created with annotated constructor', t => {
  const instance = new Annotated();

  t.truthy(instance[METADATA]);
});

test(`
  for each and every known annotation an entry in metadata map is created
  `, t => {
  const instance = new Annotated();

  t.deepEqual(instance[METADATA].length, 3);
});

test(`annotations are getting applied to objects decorated with 'extensible'`, t => {
  const instance = new Extended();

  t.deepEqual(instance['prop'], 42);
});
