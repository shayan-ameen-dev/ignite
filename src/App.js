import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGames } from './actions/gamesAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  });
  return (
    <div>
      <h1>Hello Ignite</h1>
    </div>
  );
};

export default App;
