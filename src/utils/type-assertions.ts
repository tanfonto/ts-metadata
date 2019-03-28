const isType = (type: string) => (x: any) => typeof x === type;
export const isNil = x => x === null || x === undefined;
export const isObject = isType('object');
