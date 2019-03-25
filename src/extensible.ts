import { Of } from '../types';
import { extract } from './metadata';
import { stub } from './utils';

const { assign } = Object;

function extend<T extends object>(target: T) {
  return extract<T>(target).reduce(
    (acc, [ key, desc, fn ]) =>
      assign(acc, { [key]: fn([ target, desc, key ]) }),
    stub()
  );
}

export function extensible<T extends object>() {
  return (ctor: Of<any, T>): any => {
    function Extended(...args: any[]) {
      ctor.apply(this, args);
      assign(this, extend(this));
    }

    return (Extended.prototype = ctor.prototype), Extended;
  };
}
