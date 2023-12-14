import './imageholder.css';
import { Country } from '../../types/Country';

type Props = {
  country: Country;
};

const ImageHolder = ({ country }: Props) => {
  window.addEventListener('load', function () {
    const images = document.querySelectorAll('.imageHolder__container');

    images.forEach((image, index) => {
      image.style.animationDelay = `${index * 0.5}s`;
    });
  });

  return (
    <div data-testid="image-holder" className="imageHolder__container">
      {/* ImageHolder component content */}
      <img
        className="imageHolder__image"
        src={country.countryImage}
        alt="Valtech sun"
      />

      <div className="imageHolder__topInfo">
        <p className="text-xl"> {country.countryName} </p>
        <p className="text-3xl font-semibold"> {country.countryCapital} </p>
        <p>{country.id === 1 ? country.countryDescription : ''}</p>
      </div>

      <div className="imageHolder__topInfo--details">
        <p className="text-xl"> {country.countryName} </p>
        <p className="text-3xl font-semibold"> {country.countryCapital} </p>
        <p className="text-lg font-normal"> {country.countryDescription} </p>
        <button>Explore more</button>
      </div>
    </div>
  );
};

export default ImageHolder;
