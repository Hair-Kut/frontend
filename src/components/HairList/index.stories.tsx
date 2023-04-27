import { StoryFn } from '@storybook/react';
import HairList from '.';

export default {
  component: HairList,
  title: 'HairList',
};

const Template: StoryFn = () => <HairList />;

export const Default = Template.bind({});
