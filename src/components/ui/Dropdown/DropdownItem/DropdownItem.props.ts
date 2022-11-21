import { DropdownOption } from '../DropdownOption';

export interface DropdownItemProps {
  option: DropdownOption;
  isActive?: boolean;
  onOptionClicked?: (option: DropdownOption) => () => void;
  getTitle: (option: DropdownOption) => string;
  className?: string;
}
