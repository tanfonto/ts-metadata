export type Of<P extends any[], R extends object> = new (...args: P) => R;
export type Func<T = any, R = T> = (arg: T) => R;
export type VariadicFunc<T extends any[] = any[], R = any> = (arg: T) => R;
export type Void<T> = Func<T, void>;
export type Key = string | number;
export interface IPropertyDescriptor<T = any> extends PropertyDescriptor {
  value: T;
}
