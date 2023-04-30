import { StoryFn } from '@storybook/react';

import Button, { Props as ButtonProps } from '.';

export default {
  component: Button,
  title: 'Button',
};

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>생성하기</>,
  onClick: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: <>생성하기</>,
  condition: false,
};
