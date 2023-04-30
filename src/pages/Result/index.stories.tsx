import { StoryFn } from '@storybook/react';

import ResultPage from '.';
import ContextWrapper from './ContextWrapper';

export default {
  component: ResultPage,
  title: 'ResultPage',
  decorators: [
    (Story: StoryFn) => (
      <ContextWrapper>
        <Story />
      </ContextWrapper>
    ),
  ],
};

const Template: StoryFn = () => <ResultPage />;

export const Default = Template.bind({});
