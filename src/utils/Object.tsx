// @ts-nocheck
type FlattenPaths<T, Prefix extends string = ""> = {
  [K in keyof T & string]: T[K] extends object
    ?
        | K // just the segment
        | (Prefix extends "" ? K : `${Prefix}.${K}`) // full path
        | FlattenPaths<T[K], Prefix extends "" ? K : `${Prefix}.${K}`>
    : K | (Prefix extends "" ? K : `${Prefix}.${K}`);
}[keyof T & string];

export function FieldName<T>() {
  function GetFieldName(...paths: (FlattenPaths<T> | number)[]) {
    const result = paths.reduce((a, b) => {
      if (typeof b === "number") {
        return `${a}[${b}]`;
      }
      const temp = [a, b].join(".");
      return temp as any;
    }) as string;
    return result;
  }
  return {
    GetFieldName,
  };
}
