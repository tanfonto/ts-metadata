import { Void, Func, Key } from '../../../types';

export interface Disposable {
  dispose: () => void;
}

export interface PropertyChanged<T extends object> extends Disposable {
  subscribe: Void<Func<[object, Key, T]>>;
  unsubscribe: Void<Function>;
}

export interface ObservableProperty<T extends object>
  extends PropertyChanged<T> {
  value: T;
}

export const PROPERTY_CHANGED = Symbol('PROPERTY_CHANGED');
