import { Link, NavLink, NavLinkProps, useLocation } from 'react-router-dom';

export const LinkWithSearchParams = withSearchParams(Link);

export const NavLinkWithSearchParams = withSearchParams(NavLink);

export function withSearchParams<P extends NavLinkProps>(WrappedComponent: React.ComponentType<P>) {
  const SearchParamsSupported = ({ ...props }: P) => {
    const { search } = useLocation();

    const newProps = {
      ...props,
      to: props.to + search,
    };

    return <WrappedComponent {...newProps} />;
  };

  return SearchParamsSupported;
}
