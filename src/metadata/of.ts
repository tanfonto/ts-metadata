import { Metadatum, Metadata } from './types';

export function of<T extends object>(): Metadata<T> {
  return new Array<Metadatum<T>>();
}
