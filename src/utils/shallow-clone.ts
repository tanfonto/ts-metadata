import { stub } from './index';
export const clones = (...args: object[]) => Object.assign(stub(), ...args);
