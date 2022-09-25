// Router
import { useNavigate } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Styled Components
import styled from 'styled-components';
// Framer Motion
import { motion } from 'framer-motion';
import { getResizedImagePath } from '../utils';

const GameDetails = () => {
  const navigate = useNavigate();

  function exitGameDetailsHandler(event) {
    const element = event.target;

    if (element.classList.contains('card-shadow')) {
      document.body.style.overflow = 'auto';
      navigate('/');
    }
  }

  const { gameDetails, gameScreenshots, isLoading } = useSelector(
    (state) => state.details
  );

  return (
    <>
      {!isLoading && (
        <StyledCardShadow
          className='card-shadow'
          onClick={exitGameDetailsHandler}
        >
          <StyledDetails>
            <StyledStats>
              <StyledRating>
                <h3>{gameDetails?.name}</h3>
                <p>Rating: {gameDetails?.rating}</p>
              </StyledRating>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatforms>
                  {gameDetails.platforms?.map((mapedPlatform) => (
                    <h3 key={mapedPlatform.platform.id}>
                      {mapedPlatform.platform.name}
                    </h3>
                  ))}
                </StyledPlatforms>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <img
                src={getResizedImagePath(gameDetails?.background_image, 1280)}
                alt='game'
              />
            </StyledMedia>
            <StyledDescription>
              <p>{gameDetails?.description_raw}</p>
            </StyledDescription>
            <StyledGallery>
              {gameScreenshots.results?.map((gameScreenshot) => (
                <img
                  src={getResizedImagePath(gameScreenshot.image, 1280)}
                  key={gameScreenshot.id}
                  alt='game'
                />
              ))}
            </StyledGallery>
          </StyledDetails>
        </StyledCardShadow>
      )}
    </>
  );
};

const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

const StyledDetails = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;

  img {
    width: 100%;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledRating = styled(motion.div)``;

const StyledInfo = styled(motion.div)`
  text-align: center;
`;

const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
  }
`;

const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
`;

const StyledDescription = styled(motion.div)`
  margin: 5rem 0rem;
`;

const StyledGallery = styled(motion.div)``;

export default GameDetails;
