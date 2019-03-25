import { AnnotationArgs, Setter } from './types';
import { at } from './from';

export function extension<T extends object>(set: Setter<T>): any {
  return (...[ target, key, desc ]: AnnotationArgs<T>): void => {
    at(target).push([ key, desc, set ]);
  };
}
