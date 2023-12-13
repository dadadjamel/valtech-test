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
    <div
      data-testid="image-holder"
      className="imageHolder__container h-[400px] relative z-[1] opacity-0 m-2.5"
    >
      {/* ImageHolder component content */}
      <img
        className="object-cover w-full h-full rounded-[20px]"
        src={country.countryImage}
        alt="Valtech sun"
      />

      <div className="imageHolder__topInfo text-center flex flex-col justify-center items-center text-[white] text-[larger] absolute z-[1] bg-[rgb(94,94,94)] h-full w-full opacity-[80%] rounded-[20px] left-0 top-0">
        <p className="text-xl"> {country.countryName} </p>
        <p className="text-3xl font-semibold"> {country.countryCapital} </p>
        <p>{country.id === 1 ? country.countryDescription : ''}</p>
      </div>

      <div className="imageHolder__topInfo--details text-center flex flex-col justify-center items-center text-[white] text-[larger] absolute z-[1] bg-[rgb(94,94,94)] h-full w-full opacity-0 rounded-[20px] left-0 top-0">
        <p className="text-xl"> {country.countryName} </p>
        <p className="text-3xl font-semibold"> {country.countryCapital} </p>
        <p className="text-lg font-normal"> {country.countryDescription} </p>
        <button className="bg-transparent text-[white] cursor-pointer font-bold mt-[30px] p-5 rounded-[5px] border-[white] border-solid border-[1px]">
          Explore more
        </button>
      </div>
    </div>
  );
};

export default ImageHolder;
