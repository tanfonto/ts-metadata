import { Metadatum, Metadata } from '../../dsl';

export function of<T extends object>(): Metadata<T> {
  return new Array<Metadatum<T>>();
}
