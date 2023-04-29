import { StoryFn } from '@storybook/react';
import Logo from '.';

export default {
  component: Logo,
  title: 'Logo',
};

const Template: StoryFn = () => <Logo />;

export const Default = Template.bind({});
