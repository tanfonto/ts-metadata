import { Of } from '../types';
import { extract } from './metadata';
import { isNil, mergeAll, over, stub, fold } from './utils';

const reducer = <T extends Object>(acc: T, [key, , set]: Metadatum<T>) => {};

function build<T extends Object>(target: T) {
  const meta = extract<T>(target);
  return mergeAll(fold(reducer, isNil(meta) ? stub() : meta));
}

export function extensible<T extends Object>() {
  return (ctor: Of<any, T>): any => {
    function Extended(...args: any[]) {
      ctor.apply(this, args);
      Object.assign(this, build(this));
    }

    return (Extended.prototype = ctor.prototype), Extended;
  };
}
