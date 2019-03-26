export const isNil = x => x === null || x === undefined;
export const is = (type: string) => (x: any) => typeof x === type;
export const isObject = (x: any) => is('object');
