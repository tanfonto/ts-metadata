import { Func, Key, IPropertyDescriptor, VariadicFunc } from '../types';

const { defineProperty, getOwnPropertyDescriptor: getDescriptor } = Object;

const withDescriptor = (key: Key, desc: IPropertyDescriptor) =>
  defineProperty(stub(), key, desc);

// * -> boolean
export const isNil = x => x === undefined || x === null;

// Object -> Key -> (* -> *) -> Object
export const over = <T extends Object>(target: T, key: Key, set: Func) =>
  mergeAll(
    target,
    withDescriptor(key, mergeAll(getDescriptor(target, key)!, { set }))
  );

// () -> Object
export const stub = <T extends Object>(src?: T) => src || ({} as T);

// ([ Object ]) => Object
export const mergeAll = (...objects: Array<Object>) =>
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

// * -> type -> boolean
export const isType = (x: any, y: string) => Object.is(typeof x, y);
