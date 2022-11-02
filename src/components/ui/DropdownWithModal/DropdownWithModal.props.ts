import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DropdownWithModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  modalClassName?: string;
  renderChildren: ({ maxHeight }: { maxHeight?: string | number }) => JSX.Element;
  title: string;
}
