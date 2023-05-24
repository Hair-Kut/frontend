import { StoryFn } from '@storybook/react';

import SelectedHair from '.';
import ContextWrapper from 'src/contexts/imageSrc/wrapper';

export default {
  component: SelectedHair,
  title: 'SelectedHair',
};

const Template: StoryFn = () => <SelectedHair />;

export const Default = Template.bind({});
Default.decorators = [
  (Story: StoryFn) => (
    <ContextWrapper initialState=''>
      <Story />
    </ContextWrapper>
  ),
];

export const Image = Template.bind({});
Image.decorators = [
  (Story: StoryFn) => (
    <ContextWrapper initialState='hair1'>
      <Story />
    </ContextWrapper>
  ),
];
