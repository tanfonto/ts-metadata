import { Func, IPropertyDescriptor, Key } from '../types';

const { defineProperty, getOwnPropertyDescriptor: getDescriptor } = Object;

const withDescriptor = (key: Key, desc: IPropertyDescriptor) =>
  defineProperty(stub(), key, desc);

// * -> boolean
export const isNil = x => x === undefined || x === null;

// object -> Key -> (* -> *) -> object
export const over = <T extends object>(target: T, key: Key, set: Func) =>
  mergeAll(
    target,
    withDescriptor(key, mergeAll(getDescriptor(target, key)!, { set }))
  );

// () -> object
export const stub = <T extends object>(src?: T) => src || ({} as T);

// ([ object ]) => object
export const mergeAll = (...objects: object[]) => Object.assign({}, ...objects);

export const list = <T extends any[]>(items?: T) => items || [];
