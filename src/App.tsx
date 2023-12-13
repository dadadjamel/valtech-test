import './App.css';
import GalleryImages from './components/GalleryImages/GalleryImages';
import { CircularProgress } from '@mui/material';
import { useCountries } from './hooks/useCountries';

function App() {
  const { data: countries, isLoading, error, isError } = useCountries();

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <CircularProgress />
        <h1 className="text-3xl font-semibold mt-4">Loading...please wait</h1>
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <GalleryImages countries={countries ?? []} />
    </div>
  );
}

export default App;
