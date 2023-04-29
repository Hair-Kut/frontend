import { StoryFn } from '@storybook/react';
import { PropsWithChildren } from 'react';

import Frame from '.';

export default {
  component: Frame,
  title: 'Frame',
};

const Template: StoryFn<PropsWithChildren> = ({ children }: PropsWithChildren) => (
  <Frame>{children}</Frame>
);

export const Default = Template.bind({});
Default.args = {
  children: <div style={{ width: '100px', height: '100px' }}></div>,
};

export const Big = Template.bind({});
Big.args = {
  children: <div style={{ width: '500px', height: '500px' }}></div>,
};
