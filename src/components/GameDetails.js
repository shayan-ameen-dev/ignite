// Router
import { useNavigate } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Styled Components
import styled from 'styled-components';
// Framer Motion
import { motion } from 'framer-motion';
// Utils
import { getResizedImagePath } from '../utils';
// Platform Svgs
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import nintendo from '../img/nintendo.svg';
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
// Rating Stars
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetails = ({ gameId }) => {
  const { gameDetails, gameScreenshots, isLoading } = useSelector(
    (state) => state.details
  );

  const navigate = useNavigate();

  function exitGameDetailsHandler(event) {
    const element = event.target;

    if (element.classList.contains('card-shadow')) {
      document.body.style.overflow = 'auto';
      navigate('/');
    }
  }

  function getPlatformSvg(platform) {
    switch (platform) {
      case 'iOS':
        return apple;
      case 'Nintendo Switch':
        return nintendo;
      case 'PlayStation 4':
      case 'PlayStation 5':
        return playstation;
      case 'PC':
        return steam;
      case 'Xbox One':
      case 'Xbox Series S/X':
        return xbox;
      default:
        console.log(platform);
        return gamepad;
    }
  }

  function getRatingStars(rating) {
    const stars = [];
    const avgRating = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= avgRating) {
        stars.push(<img src={starFull} key={i} alt='star' />);
      } else {
        stars.push(<img src={starEmpty} key={i} alt='star' />);
      }
    }

    return stars;
  }

  return (
    <>
      {!isLoading && (
        <StyledCardShadow
          className='card-shadow'
          onClick={exitGameDetailsHandler}
          layoutId={gameId}
        >
          <StyledDetails>
            <StyledStats>
              <StyledRating>
                <motion.h3 layoutId={`title ${gameId}`}>
                  {gameDetails?.name}
                </motion.h3>
                <p>Rating: {gameDetails?.rating}</p>
                {getRatingStars(gameDetails?.rating)}
              </StyledRating>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatforms>
                  {gameDetails.platforms?.map((mapedPlatform) => (
                    <img
                      src={getPlatformSvg(mapedPlatform.platform.name)}
                      key={mapedPlatform.platform.id}
                      alt={mapedPlatform.platform.name}
                    />
                  ))}
                </StyledPlatforms>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <motion.img
                layoutId={`image ${gameId}`}
                src={getResizedImagePath(gameDetails?.background_image, 1280)}
                alt='game'
              />
            </StyledMedia>
            <StyledDescription>
              <p>{gameDetails?.description_raw}</p>
            </StyledDescription>
            <StyledGallery>
              {gameScreenshots.results?.map((gameScreenshot) => (
                <motion.img
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
  z-index: 5;

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
  z-index: 10;
  color: black;

  img {
    width: 100%;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    display: inline-block;
  }
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
