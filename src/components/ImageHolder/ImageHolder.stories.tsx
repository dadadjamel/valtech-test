import type { Meta, StoryObj } from '@storybook/react';
import './imageholder.css';

import ImageHolder from './ImageHolder';
import { places } from '../../api/places';

const meta: Meta<typeof ImageHolder> = {
  component: ImageHolder,
};

export default meta;
type Story = StoryObj<typeof ImageHolder>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const ImageHolderStory: Story = {
  render: () => <ImageHolder country={places[0]} />,
};
