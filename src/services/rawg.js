const BASE_URL = 'https://api.rawg.io/api/';
const API_KEY = '22c2c819f0e84887b6d8f5e4bca6287d';
const PAGE_SIZE = 10;

export function getPopularGamesUrl() {
  const POPULAR_GAMES_ENDPOINT = `games?key=${API_KEY}&dates=${
    getDates().last
  },${getDates().current}&ordering=-rating&page_size=${PAGE_SIZE}`;

  return `${BASE_URL}${POPULAR_GAMES_ENDPOINT}`;
}

export function getUpcomingGamesUrl() {
  const UPCOMING_GAMES_ENDPOINT = `games?key=${API_KEY}&dates=${
    getDates().current
  },${getDates().next}&ordering=-added&page_size=${PAGE_SIZE}`;

  return `${BASE_URL}${UPCOMING_GAMES_ENDPOINT}`;
}

export function getNewGamesUrl() {
  const NEW_GAMES_ENDPOINT = `games?key=${API_KEY}&dates=${
    getDates().current
  },${getDates().next}&ordering=-released&page_size=${PAGE_SIZE}`;

  return `${BASE_URL}${NEW_GAMES_ENDPOINT}`;
}

export function getGameDelailsUrl(gameId) {
  return `${BASE_URL}games/${gameId}?key=${API_KEY}`;
}

export function getGameScreenshotsUrl(gameId) {
  return `${BASE_URL}games/${gameId}/screenshots?key=${API_KEY}`;
}

function getDates() {
  const date = new Date().getDate();
  const formatedDate = date < 10 ? '0' + date : date;
  const month = new Date().getMonth();
  const formatedMonth = month + 1 < 10 ? '0' + (month + 1) : month + 1;
  const year = new Date().getFullYear();

  return {
    current: `${year}-${formatedMonth}-${formatedDate}`,
    last: `${year - 1}-${formatedMonth}-${formatedDate}`,
    next: `${year + 1}-${formatedMonth}-${formatedDate}`,
  };
}
