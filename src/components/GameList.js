import { useEffect } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { fetchGames } from '../actions/gamesAction';
import { useSelector } from 'react-redux';
// Framer Motion
import { motion } from 'framer-motion';
// Styled Components
import styled from 'styled-components';
import Game from './Game';

const GameList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const { newGames, popularGames, upcomingGames } = useSelector(
    (state) => state.games
  );
  return (
    <StyledGameList>
      <h2>Upcoming Games</h2>
      <StyledGames>
        {upcomingGames?.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </StyledGames>
      <h2>Popular Games</h2>
      <StyledGames>
        {popularGames?.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </StyledGames>
      <h2>New Games</h2>
      <StyledGames>
        {newGames?.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </StyledGames>
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }
`;

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default GameList;
