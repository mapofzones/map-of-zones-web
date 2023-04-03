import React, { ComponentType, LazyExoticComponent } from 'react';

export type ComponentWithPreload<T extends ComponentType<any>> = LazyExoticComponent<T> & {
  preload: () => Promise<{ default: T }>;
};

export default function lazyPreload<T extends ComponentType<any>>(
  importStatement: () => Promise<{ default: T }>
): ComponentWithPreload<T> {
  const Component = React.lazy(importStatement);
  const componentWithPreload = { ...Component, preload: importStatement };
  return componentWithPreload as ComponentWithPreload<T>;
}
