import { useEffect } from 'react';
// Router
import { useLocation } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { fetchGames } from '../actions/gamesAction';
import { useSelector } from 'react-redux';
// Framer Motion
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
// Styled Components
import styled from 'styled-components';
import Game from './Game';
import GameDetails from './GameDetails';

const GameList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const { newGames, popularGames, upcomingGames, isLoading } = useSelector(
    (state) => state.games
  );

  const { pathname } = useLocation();
  const gameId = pathname.split('/')[2];

  return (
    <>
      {!isLoading && (
        <StyledGameList>
          <LayoutGroup>
            <AnimatePresence>
              {gameId && <GameDetails gameId={gameId} />}
            </AnimatePresence>
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
          </LayoutGroup>
        </StyledGameList>
      )}
    </>
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
