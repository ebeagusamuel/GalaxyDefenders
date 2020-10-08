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
      console.error(error)
    }
  }

  const getScores = async() => {
    try {
      let response = await fetch(`${baseURL}${gameId}/scores`, {mode: 'cors'});
      let jsonObj = await response.json();

      return jsonObj

    } catch (error) {
      console.error(error)
    }
  }

  const topScores = async() => {
    let scoreObj = await getScores();
    let scores = scoreObj.result
    scores.sort((a, b) => b.score - a.score);

    return scores;
  }

  return {postScore, topScores}
})()

export default API