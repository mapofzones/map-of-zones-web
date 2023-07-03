/* eslint-disable sort-exports/sort-exports */
import { useArgs } from '@storybook/client-api';

import { Checkbox } from '.';
import 'index.scss';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  decorators: [
    function Component(Story, ctx) {
      const [, setArgs] = useArgs();

      const onCheckedChange = (value: boolean) => {
        ctx.args.onCheckedChange?.(value);
        setArgs({ checked: value });
      };

      return <Story args={{ ...ctx.args, onCheckedChange }} />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
