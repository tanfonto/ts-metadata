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
export const mergeAll = (...objects: Array<object>) =>
  Object.assign({}, ...objects);

type Reducer<C = any, A = any> = (
  acc: A,
  curr: C,
  index?: number,
  out?: C[]
) => A;

// (* -> [*] | object) -> [*] | object
export const fold = <
  T = object | Array<any>,
  R extends Reducer = T extends Array<infer X>
    ? Reducer<X, Array<X>>
    : Reducer<[Key, any], object>
>(
  reducer: R,
  arg: T
) =>
  Array.isArray(arg)
    ? arg.reduce(reducer, [])
    : Object.entries(arg).reduce(reducer, stub());
