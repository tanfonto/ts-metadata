import { Func, IPropertyDescriptor, Pair, VariadicFunc, Key } from './types';

export type EventType = 'pre' | 'post';
export type Tap<E extends EventType> = E extends 'pre' ? VariadicFunc : Func;
export type Setter<T extends Object, K extends keyof T | Key = Key> = Func<
  Pair<T, K>,
  K extends keyof T ? T[K] : any
>;
export type Metadatum<T extends Object> = [Key, IPropertyDescriptor, Setter<T>];
export type Metadata<T extends Object> = Array<Metadatum<T>>;
export type AnnotationContext<T extends Object, P = any> = [
  T,
  Key,
  IPropertyDescriptor<P>
];
