import { Of } from '../types';
import { isNil, mergeAll, over, stub, fold } from './utils';
import { Metadatum } from '../dsl';
import { extract } from './metadata';

const reducer = <T extends object>(acc: T, [key, , set]: Metadatum<T>) => {};

function apply<T extends object>(target: T) {
  const meta = extract<T>(target);
  return mergeAll(fold(reducer, isNil(meta) ? stub() : meta));
}

export function extensible<T extends object>() {
  return (ctor: Of<any, T>): any => {
    function Extended(...args: any[]) {
      ctor.apply(this, args);
      Object.assign(this, apply(this));
    }

    return (Extended.prototype = ctor.prototype), Extended;
  };
}
