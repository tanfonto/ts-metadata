import { Func, IPropertyDescriptor, Key, Pair } from './types';

// export type EventType = 'pre' | 'post';
// export type Tap<E extends EventType> = E extends 'pre' ? VariadicFunc : Func;

export type Setter<T extends object, K extends keyof T | Key = Key> = Func<
  Pair<T, K>,
  K extends keyof T ? T[K] : any
>;
export type Metadatum<T extends object, P = any> = [
  Key,
  IPropertyDescriptor<P>,
  Setter<T>
];
export type Metadata<T extends object> = Array<Metadatum<T>>;
export type AnnotationArgs<T extends object, P = any> = [
  T,
  Key,
  IPropertyDescriptor<P>
];
