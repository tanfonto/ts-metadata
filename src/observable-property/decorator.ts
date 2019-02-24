import { PropertyChanged } from './types';
import { Func } from '../../types';
import { AnnotationContext } from '../../dsl';
import { annotate } from '../metadata';

export function prop<T extends Object>(
  events: Func<PropertyChanged<any>>
): any {
  return (...context: AnnotationContext<T>) => annotate(set, ...context);
}
