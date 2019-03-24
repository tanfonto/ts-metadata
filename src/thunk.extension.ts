// import { AnnotationContext, EventType, Tap } from '../dsl';
// import { annotate } from './metadata';
// import { Pair } from '../types';
//
// export function thunk<E extends EventType>(type: E, tap: Tap<E>): any {
//   const pre = object.is(type, 'pre');
//
//   return <T extends object>(...context: AnnotationContext<T, Tap<E>>) => {
//     const [target, , desc] = context;
//     const { value: method } = desc;
//     const bound = tap.bind(target);
//
//     annotate(
//       (args: Pair<T, AnnotationContext<T, Tap<E>>[1]>) =>
//         pre ? method(bound(args)) : bound(method(args)),
//       ...context
//     );
//   };
// }
