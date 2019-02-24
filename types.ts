export type MapOf<T extends Object, V = any> = Map<keyof T, V>;
export type Of<P extends any[], R extends Object> = new (...args: P) => R;
export type Func<T = any, R = T> = (arg: T) => R;
export type VariadicFunc<T extends any[] = any[], R = any> = (arg: T) => R;
export type Void<T> = Func<T, void>;
export type Pred<T> = Func<T, boolean>;
export type Pair<T0, T1> = [T0, T1];
export type Dictionary<T = any> = {
  [key: string]: T;
  [key: number]: T;
};
export type Key = string | number;
export interface IPropertyDescriptor<T = any> extends PropertyDescriptor {
  value: T;
}
