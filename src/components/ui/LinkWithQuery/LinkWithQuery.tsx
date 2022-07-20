import { Link, useLocation } from 'react-router-dom';

import LinkWithQueryProps from './LinkWithQuery.props';

function LinkWithQuery({ to, children, ...props }: LinkWithQueryProps) {
  const { search } = useLocation();

  return (
    <Link to={to + search} {...props}>
      {children}
    </Link>
  );
}

export { LinkWithQuery };
