export function debounce(this: unknown, fn: () => void, ms: number) {
  let timer: number | undefined;
  return () => {
    clearTimeout(timer);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    timer = setTimeout((_) => {
      timer = undefined;
      fn.apply(this);
    }, ms);
  };
}
