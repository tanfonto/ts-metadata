import { IPropertyDescriptor, Key } from '../../types';
import { stub } from './index';
import { clones } from './shallow-clone';

const { defineProperty } = Object;

export function set<T>(
  key: Key,
  prop: IPropertyDescriptor<T> | T,
  src: object
) {
  return clones(
    src,
    typeof prop === 'object'
      ? defineProperty(stub(), key, prop)
      : { [key]: prop }
  );
}
