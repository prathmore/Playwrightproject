// 67. Remove property from object
function removeProperty<T extends Record<string, any>>(
  obj: T,
  prop: keyof T
): Partial<T> {
  const { [prop]: _, ...rest } = obj;
  return rest;
}

const obj = { a: 1, b: 2, c: 3 };
console.log(removeProperty(obj, "b")); // { a: 1, c: 3 }
