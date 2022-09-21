import { useEffect } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { fetchGames } from './actions/gamesAction';
import GlobalStyles from './components/GlobalStyles';
// Pages
import Home from './pages/Home';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div className='App'>
      <GlobalStyles />
      <Home />
    </div>
  );
};

export default App;
