import { SearchProps } from 'ui/Search/Search.props';

export interface GlobalSearchInputProps extends SearchProps {
  className?: string;
  onCancel?: () => void;
  onClick?: () => void;
}
