import { IPropertyDescriptor, Key } from '../../types';
import { stub } from './index';
import { merge } from './object';
import { isObject } from './type-assertions';

const { defineProperty } = Object;

export function set<T>(
  key: Key,
  prop: IPropertyDescriptor<T> | T,
  src: object
) {
  return merge(
    src,
    isObject(prop) ? defineProperty(stub(), key, prop) : { [key]: prop }
  );
}
