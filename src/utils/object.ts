export const stub = <T extends object>(src?: T) => src || ({} as T);

export const merge = (...args: object[]) => Object.assign(stub(), ...args);
