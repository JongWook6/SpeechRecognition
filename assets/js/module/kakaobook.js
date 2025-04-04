const API_URL = 'https://dapi.kakao.com/v3/search/book?';
const API_KEY = 'KakaoAK 1b7518334ebe5f8320ef1d47d0585e73';

const api = async params => {
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(API_URL + queryString, {
    headers: {Authorization: 'KakaoAK 1b7518334ebe5f8320ef1d47d0585e73'}
  });

  return response.json();
}

export default api;