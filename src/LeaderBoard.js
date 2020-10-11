import 'regenerator-runtime';

const API = (() => {
  const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const gameId = '56zALG4xwXumPvOu4eKI';

  const postScore = async () => {
    const data = window.global;

    try {
      const response = await fetch(`${baseURL}${gameId}/scores`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
      });
      const jsonObj = await response.json();

      return jsonObj;
    } catch (error) {
      return null;
    }
  };

  const getScores = async () => {
    try {
      const response = await fetch(`${baseURL}${gameId}/scores`, {
        mode: 'cors',
      });
      const jsonObj = await response.json();

      return jsonObj;
    } catch (error) {
      return null;
    }
  };


  const topScores = async () => {
    try {
      const scoreObj = await getScores();
      const scores = scoreObj.result;
      scores.sort((a, b) => b.score - a.score);

      return scores;
    } catch (error) {
      return null;
    }
  };

  return { postScore, getScores, topScores };
})();

export default API;
