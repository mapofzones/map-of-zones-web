import { useState } from 'react';

import cn from 'classnames';
import useClipboard from 'react-use-clipboard';

import { CopyIcon } from 'assets/icons';
import { Tooltip } from 'components/ui';

import styles from './ClipboardIcon.module.scss';

export function ClipboardIcon({ className, text }: { className?: string; text: string }) {
  const [, copyText] = useClipboard(text);

  const [copied, setCopied] = useState(false);

  const onCopyClick = () => {
    copyText();
    setCopied(true);
  };

  const onTooltipHide = () => {
    setTimeout(() => {
      setCopied(false);
    }, 200);
  };

  return (
    <Tooltip
      className={styles.tooltip}
      onTooltipHide={onTooltipHide}
      hoverElement={<CopyIcon className={cn(styles.copyIcon, className)} onClick={onCopyClick} />}
      width={copied ? 67 : 53}
    >
      <div className={cn({ [styles.copied]: copied })}>{copied ? 'Copied!' : 'Copy'}</div>
    </Tooltip>
  );
}
