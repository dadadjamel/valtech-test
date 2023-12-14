import './App.css';
import GalleryImages from './components/GalleryImages/GalleryImages';
import { CircularProgress } from '@mui/material';
import { useCountries } from './hooks/useCountries';

function App() {
  const { data: countries, isLoading, error, isError } = useCountries();

  if (isLoading) {
    return (
      <div className="app__loading">
        <CircularProgress />
        <h1>Loading...please wait</h1>
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="app">
      <GalleryImages countries={countries ?? []} />
    </div>
  );
}

export default App;
