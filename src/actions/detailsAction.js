import axios from 'axios';
import { getGameDelailsUrl, getGameScreenshotsUrl } from '../services/rawg';

export function fetchDetails(gameId) {
  return async (dispatch) => {
    const gameDetailsResponse = await axios.get(getGameDelailsUrl(gameId));
    const gameScreenshotsResponse = await axios.get(
      getGameScreenshotsUrl(gameId)
    );

    dispatch({
      type: 'FETCH_DETAILS',
      payload: {
        gameDetails: gameDetailsResponse.data,
        gameScreenshots: gameScreenshotsResponse.data,
      },
    });
  };
}
