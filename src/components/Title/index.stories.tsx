import { StoryFn } from '@storybook/react';

import Title, { Props as TitleProps } from '.';

export default {
  component: Title,
  title: 'Title',
};

const Template: StoryFn<TitleProps> = (args: TitleProps) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Title',
};
