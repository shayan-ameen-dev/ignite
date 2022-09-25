// Router
import { Link } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { fetchDetails } from '../actions/detailsAction';
// Styled Components
import styled from 'styled-components';
// Framer Motion
import { motion } from 'framer-motion';
// Utils
import { getResizedImagePath } from '../utils';

const Game = ({ game }) => {
  const dispatch = useDispatch();
  function fetchDetailsHandler() {
    document.body.style.overflow = 'hidden';
    dispatch(fetchDetails(game.id));
  }

  const { name, released, background_image, id } = game;
  return (
    <>
      {id && name && released && background_image ? (
        <StyledGame layoutId={String(id)} onClick={fetchDetailsHandler}>
          <Link to={`/game/${id}`}>
            <motion.h3 layoutId={`title ${String(id)}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img
              layoutId={`image ${String(id)}`}
              src={getResizedImagePath(background_image, 640)}
              alt={name}
            />
          </Link>
        </StyledGame>
      ) : null}
    </>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    min-height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
