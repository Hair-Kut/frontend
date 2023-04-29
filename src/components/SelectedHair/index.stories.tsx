import { StoryFn } from '@storybook/react';
import SelectedHair, { Props as SelectedHairProps } from '.';

export default {
  component: SelectedHair,
  title: 'SelectedHair',
};

const Template: StoryFn<SelectedHairProps> = (args: SelectedHairProps) => (
  <SelectedHair {...args} />
);

export const Default = Template.bind({});
Default.args = {
  hairImageSrc: '',
};

export const Image = Template.bind({});
Image.args = {
  hairImageSrc: 'hair1',
};
