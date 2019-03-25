import { AnnotationArgs, DecoratorArgs } from '../../metadata/types';
import { Func } from '../../../types';
import { extension } from '../../metadata';
import { PropertyChanged } from './types';

function set<T>(...args: DecoratorArgs<T>) {
  return {};
}

export function prop<T extends object>(
  ...events: Func<PropertyChanged<any>>[]
): any {
  return (...args: AnnotationArgs<T>) => extension(x => x, ...args);
}
