import { AnnotationArgs, DecoratorArgs } from '../metadata/types';
import { extension } from '../metadata';
import { EventType, Tap } from './types';

export function thunk<E extends EventType>(type: E, tap: Tap<E>): any {
  const pre = Object.is(type, 'pre');

  return <T extends object>(...context: AnnotationArgs<T, Tap<E>>) => {
    const [ target, , desc ] = context;
    const { value: method } = desc;
    const bound = tap.bind(target);

    extension(
      (args: DecoratorArgs<T>) =>
        pre ? method(bound(args)) : bound(method(args))
    )(...context);
  };
}

export const pre = (fn: Tap<'pre'>) => thunk('pre', fn);
export const post = (fn: Tap<'post'>) => thunk('post', fn);
