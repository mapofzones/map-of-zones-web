import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { DropdownOption } from 'components/ui/Dropdown/DropdownOption';
import { ElementSize } from 'types/ElementSize';

export interface DropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  initialSelectedKey: string;
  options: DropdownOption[];
  className?: string;
  onOptionSelected?: (option: DropdownOption) => void;
  size?: ElementSize;
}
