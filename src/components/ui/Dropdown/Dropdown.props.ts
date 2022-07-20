import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { DropdownOption } from 'components/ui/Dropdown/DropdownOption';

export interface DropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  initialSelectedKey: string;
  options: DropdownOption[];
  className?: string;
  onOptionSelected?: (option: DropdownOption) => void;
}
