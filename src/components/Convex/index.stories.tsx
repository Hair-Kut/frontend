import { StoryFn } from '@storybook/react';

import Convex from '.';

export default {
  component: Convex,
  title: 'Convex',
  decorators: [
    (Story: StoryFn) => (
      <div style={{ border: '1px solid #000', borderRadius: '5px', width: 'fit-content' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = () => (
  <Convex>
    <div style={{ width: '100px', height: '100px' }} />
  </Convex>
);

export const Default = Template.bind({});
