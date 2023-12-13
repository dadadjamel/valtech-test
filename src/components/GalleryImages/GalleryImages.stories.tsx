import type { Meta, StoryObj } from '@storybook/react';
import './galleryimages.css';

import GalleryImages from './GalleryImages';
import { places } from '../../api/places';

const meta: Meta<typeof GalleryImages> = {
  component: GalleryImages,
};

export default meta;
type Story = StoryObj<typeof GalleryImages>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const GalleryImagesStory: Story = {
  render: () => <GalleryImages countries={places} />,
};
