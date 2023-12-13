import { Grid } from '@mui/material';
import ImageHolder from '../ImageHolder/ImageHolder';
import './galleryimages.css';
import { Country } from '../../types/Country';

type Props = {
  countries: Country[];
};

const GalleryImages = ({ countries }: Props) => {
  return (
    <div data-testid="gallery images">
      {/* GalleryImages component content */}
      <Grid container spacing={2}>
        <Grid className="gridStyle" item xs={12}>
          <ImageHolder country={countries[0]} />
        </Grid>

        <Grid container className="gridStyle" item xs={12}>
          <Grid item xs={12} sm={12} md={6}>
            <ImageHolder country={countries[1]} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ImageHolder country={countries[2]} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ImageHolder country={countries[3]} />
          </Grid>
        </Grid>

        <Grid container className="gridStyle" item xs={12}>
          <Grid item xs={12} sm={6} md={3}>
            <ImageHolder country={countries[4]} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ImageHolder country={countries[5]} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <ImageHolder country={countries[6]} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default GalleryImages;
