import { PropertyChanged } from './types';
import { DecoratorArgs, AnnotationArgs } from '../../../dsl';
import { Func } from '../../../types';
import { extension } from '../../metadata';

function set<T>(...args: DecoratorArgs<T>) {
  return {};
}

export function prop<T extends object>(
  ...events: Func<PropertyChanged<any>>[]
): any {
  return (...args: AnnotationArgs<T>) => extension(x => x, ...args);
}
