import { combineReducers } from 'redux';
import detailsReducer from './detailsReducer';
import gamesReducer from './gamesReducer';

const combinedReducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
});

export default combinedReducer;
