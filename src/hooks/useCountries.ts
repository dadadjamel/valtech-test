import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../api/places';

export const useCountries = () => useQuery({
  queryKey: ['countries'],
  queryFn: fetchData,
});
