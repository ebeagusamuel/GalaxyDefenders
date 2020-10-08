const API = () => {
  const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'
  const gameId = '56zALG4xwXumPvOu4eKI';

  const postScore = async() => {
    let data = window.global

    try {
      await fetch(`${baseURL}${gameId}/scores`, {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
      })
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

  const topScores = () => {
    let scores = getScores().result;
    scores.sort((a, b) => a.score - b.score);

    return scores;
  }

  return {postScore, topScores}
}

export default API