import { StoryFn } from '@storybook/react';
import Hair, { Props as HairProps } from '.';

export default {
  component: Hair,
  title: 'Hair',
};

const Template: StoryFn<HairProps> = (args: HairProps) => <Hair {...args} />;

export const Default = Template.bind({});
Default.args = {
  hair: 'hair1',
};

export const Selected = Template.bind({});
Selected.args = {
  hair: 'hair1',
  selected: true,
};
