// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StoryFn } from '@storybook/react';
import { fireEvent, waitFor, within } from '@testing-library/react';

import HomePage from '.';

export default {
  component: HomePage,
  title: 'HomePage',
};

const Template: StoryFn = () => <HomePage />;

export const Default = Template.bind({});

export const ClickHair = Template.bind({});
ClickHair.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const hairButton3 = canvas.getByLabelText('hair3');

    fireEvent.click(hairButton3);
  });
};
