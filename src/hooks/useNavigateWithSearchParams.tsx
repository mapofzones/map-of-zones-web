import { NavigateOptions, useNavigate, useSearchParams } from 'react-router-dom';

export function useNavigateWithSearchParams() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (pathname: string, options?: NavigateOptions) => {
    navigate(
      {
        pathname: pathname,
        search: '?' + searchParams.toString(),
      },
      options
    );
  };
}
