import { test } from 'ava-ts';
import { extensible, extension } from '../../src';

@extensible()
class Extended {
  @extension(_ => 42)
  public prop: any;

  @extension(([t, , k]) => t[k] + 42)
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
