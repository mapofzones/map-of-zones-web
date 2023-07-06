import { SearchProps } from 'ui/Search/Search.props';

export interface GlobalSearchInputProps extends SearchProps {
  className?: string;
  showCompareSwitcher?: boolean;
  onCancel?: () => void;
  onClick?: () => void;
}
