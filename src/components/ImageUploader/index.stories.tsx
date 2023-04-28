import { StoryFn } from '@storybook/react';

import ImageUploader from '.';

export default {
  component: ImageUploader,
  title: 'ImageUploader',
};

const Template: StoryFn = () => <ImageUploader />;

export const Default = Template.bind({});
