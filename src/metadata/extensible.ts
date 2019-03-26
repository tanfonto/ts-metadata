import { Of } from '../../types';
import { list, stub } from '../utils';
import { set } from '../utils/lens';
import { extract } from './from';

function extend<T extends object>(target: T) {
  return list(extract(target)).reduce(
    (out, [key, desc, fn]) => set(key, fn([target, desc, key]), out),
    stub()
  );
}

export function extensible<T extends object>() {
  return (ctor: Of<any, T>): any => {
    function Extended(...args: any[]) {
      ctor.apply(this, args);
      Object.assign(this, extend(this));
    }

    return (Extended.prototype = ctor.prototype), Extended;
  };
}
