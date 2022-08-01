export function debounce(this: unknown, fn: any, ms: number) {
  let timer: number | undefined;
  return (_: unknown) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = undefined;
      fn.apply(this);
    }, ms);
  };
}
