import { Func, Key, Void } from '../../types';

export interface Disposable {
  dispose: () => void;
}

export interface PropertyChanged<T extends Object> extends Disposable {
  subscribe: Void<Func<[Object, Key, T]>>;
  unsubscribe: Void<Function>;
}

export interface ObservableProperty<T> extends PropertyChanged<T> {
  value: T;
}

export const PROPERTY_CHANGED = Symbol('PROPERTY_CHANGED');

