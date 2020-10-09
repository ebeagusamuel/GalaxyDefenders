import 'regenerator-runtime';

const API = (() => {
  const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'
  const gameId = '56zALG4xwXumPvOu4eKI';

  const postScore = async() => {
    let data = window.global

    try {
      let response = await fetch(`${baseURL}${gameId}/scores`, {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
      })
      let jsonObj = await response.json()

      return jsonObj

    } catch (error) {
      return null
    }
  }

  const getScores = async() => {
    try {
      let response = await fetch(`${baseURL}${gameId}/scores`, {mode: 'cors'});
      let jsonObj = await response.json();

      return jsonObj

    } catch (error) {
      return null
    }
  }

  const topScores = async() => {
    let scoreObj = await getScores();
    let scores = scoreObj.result
    scores.sort((a, b) => b.score - a.score);
    console.log(scores)
    return scores;
  }

  return {postScore, getScores, topScores}
})()

export default API