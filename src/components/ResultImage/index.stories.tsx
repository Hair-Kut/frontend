import { StoryFn } from '@storybook/react';

import ResultImage, { Props as ResultImageProps } from '.';

export default {
  component: ResultImage,
  title: 'ResultImage',
  decorators: [
    (Story: StoryFn) => (
      <div style={{ border: '1px solid #000', borderRadius: '10px', width: 'fit-content' }}>
        <Story />
      </div>
    ),
  ],
};

const Template: StoryFn<ResultImageProps> = (args: ResultImageProps) => <ResultImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'img/result.png',
};
