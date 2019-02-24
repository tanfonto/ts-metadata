import { test } from 'ava-ts';
import { extensible } from '../src/extensible';
import { prop } from '../src/prop.extension';

@extensible()
class Extended {
  @prop(_ => 42)
  public prop: any;

  @prop(([t, k]) => t[k] + 42)
  public prop2 = 8;
}

test(`annotations are getting applied to objects annotated with 'extensible'`, t => {
  const instance = new Extended();

  t.deepEqual(instance['prop'], 42);
});

test(`annotations are getting applied to objects annotated with 'extensible'`, t => {
  const instance = new Extended();

  t.deepEqual(instance['prop2'], 50);
});
