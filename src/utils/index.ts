// * -> boolean
export const isNil = x => x === undefined || x === null;

// () -> object
export const stub = <T extends object>(src?: T) => src || ({} as T);

// ([ object ]) => object
export const mergeAll = (...objects: object[]) => Object.assign({}, ...objects);

export const list = <T extends any[]>(items?: T) => items || [];
