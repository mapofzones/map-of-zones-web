import { useNavigate, useSearchParams } from 'react-router-dom';

export function useNavigateWithSearchParams() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (pathname: string) => {
    navigate({
      pathname: pathname,
      search: '?' + searchParams.toString(),
    });
  };
}
