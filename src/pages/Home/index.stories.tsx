import { StoryFn } from '@storybook/react';

import HomePage from '.';

export default {
  component: HomePage,
  title: 'HomePage',
};

const Template: StoryFn = () => <HomePage />;

export const Default = Template.bind({});
