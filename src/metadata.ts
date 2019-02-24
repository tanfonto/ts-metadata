import { Metadata, Metadatum, Setter, AnnotationContext } from '../dsl';
import { metadata } from '../global';
import { isNil } from './utils';

const { defineProperty, get, has } = Reflect;

const exists = (target: Object) =>
  has(target, metadata) && !isNil(get(target, metadata));

const from = <T extends Object>(target: T) => (
  exists(target) || init(target), extract(target)
);

function init<T extends Object>(target: T) {
  defineProperty(target, metadata, {
    configurable: false,
    enumerable: false,
    value: of<T>(),
    writable: false
  });
}

export function annotate<T extends Object>(
  set: Setter<T>,
  ...[target, key, desc]: AnnotationContext<T>
) {
  from(target).push([key, desc, set]);
}

// Object -> Map
export function extract<T extends Object>(target: T): Metadata<T> {
  return get(target, metadata);
}

// () -> Map
export function of<T extends Object>(): Metadata<T> {
  return new Array<Metadatum<T>>();
}
