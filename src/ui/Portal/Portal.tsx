import { ReactNode } from 'react';

import ReactDOM from 'react-dom';

export function Portal({ children }: { children: ReactNode }) {
  const portal = document.getElementById('portal') || document.getElementsByTagName('body')[0];

  return ReactDOM.createPortal(children, portal);
}
