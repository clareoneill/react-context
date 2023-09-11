import { useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import { getAllMovies } from '../../services/MovieService';
import './Home.css';

export default function Home({ children }) {
  const { loadMovies } = useAppContext();

  useEffect(() => {
    async function fetchData() {
      loadMovies(await getAllMovies());
    }
    fetchData();
  }, []);

  return children;
}
