import { useEffect } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { fetchGames } from './actions/gamesAction';
// Pages
import Home from './pages/Home';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div className='App'>
      <Home />
    </div>
  );
};

export default App;
