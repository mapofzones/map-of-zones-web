export function debounce(this: unknown, fn: () => void, ms: number) {
  let timer: number | undefined;
  return () => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = undefined;
      fn.apply(this);
    }, ms);
  };
}
