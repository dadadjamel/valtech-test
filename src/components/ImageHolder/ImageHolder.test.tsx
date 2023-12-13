import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ImageHolder from './ImageHolder';
import { places } from '../../api/places';

describe('image holder component', () => {
  it('renders imageholder correctlly', () => {
    render(<ImageHolder country={places[0]} />);
    const imageHolderDiv = screen.getByTestId('image-holder');
    expect(imageHolderDiv).toBeInTheDocument();
  });
});
