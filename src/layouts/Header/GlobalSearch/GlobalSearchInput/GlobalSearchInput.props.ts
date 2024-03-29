import { SearchProps } from 'components/ui/Search/Search.props';

export interface GlobalSearchInputProps extends SearchProps {
  className?: string;
  showHotkeyHint?: boolean;
  onCancel?: () => void;
  onClick?: () => void;
}
