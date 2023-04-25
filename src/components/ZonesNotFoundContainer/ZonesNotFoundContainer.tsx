import { NotFoundContainer } from 'components/NotFoundContainer';

export function ZonesNotFoundContainer({ className }: { className?: string }) {
  return <NotFoundContainer className={className}>No zones found.</NotFoundContainer>;
}
