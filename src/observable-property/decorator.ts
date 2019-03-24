import { PropertyChanged } from './types';
import { Func } from '../../types';
import { AnnotationArgs } from '../../dsl';
import { annotate } from '../metadata';

export function prop<T extends object>(
  events: Func<PropertyChanged<any>>
): any {
  return (...args: AnnotationArgs<T>) => annotate(set, ...args);
}
