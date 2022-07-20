import { ReactNode } from 'react';

import { LinkProps } from 'react-router-dom';

export default interface LinkWithQueryProps extends LinkProps {
  children?: ReactNode;
}
