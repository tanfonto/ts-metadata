import { Func, IPropertyDescriptor, Key } from '../../types';

export type DecoratorArgs<T> = [T, IPropertyDescriptor<T>, Key];

export type Setter<T extends object, R = any> = Func<
  DecoratorArgs<T>,
  R | IPropertyDescriptor<R>
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
