import { Setter, AnnotationArgs } from '../../dsl';
import { at } from './from';

export function annotate<T extends object>(
  set: Setter<T>,
  ...[target, key, desc]: AnnotationArgs<T>
) {
  at(target).push([key, desc, set]);
}
