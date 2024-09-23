import { useContext } from 'react';
import { MovieContext } from '@contexts/MovieContext';

export function useMovie() {
  const context = useContext(MovieContext);
  return context;
}