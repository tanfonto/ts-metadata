import { Metadata } from '../../dsl';
import { METADATA } from '../../global';
import { isNil, list } from '../utils/index';
import { of } from './of';

const { defineProperty, get, has } = Reflect;

function exists(target: object) {
  return has(target, METADATA) && !isNil(get(target, METADATA));
}

function init<T extends object>(target: T) {
  defineProperty(target, METADATA, {
    configurable: false,
    enumerable: false,
    value: of<T>(),
    writable: false
  });
}

export function extract<T extends object>(target: T): Metadata<T> {
  return list(get(target, METADATA));
}

export const at = <T extends object>(target: T) => (
  exists(target) || init(target), extract(target)
);
