import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import GalleryImages from './GalleryImages';
import { places } from '../../api/places';

describe('Gallery Images component', () => {
  it('renders GalleryImages correctlly', () => {
    render(<GalleryImages countries={places} />);
    const galleryImagesDiv = screen.getByTestId('gallery images');
    expect(galleryImagesDiv).toBeInTheDocument();
  });
});
