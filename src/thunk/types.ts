import { Func, VariadicFunc } from '../../types';

export type EventType = 'pre' | 'post';
export type Tap<E extends EventType> = E extends 'pre' ? VariadicFunc : Func;
