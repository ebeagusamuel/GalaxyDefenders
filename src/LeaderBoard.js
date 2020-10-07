const getApiKey = async() => {
  try {
    let response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/', {
      method: 'POST',
      body: JSON.stringify({
      "name": "Galaxy Defenders"
      }),
      mode: "cors",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    let jsonObj = await response.json();
    console.log(jsonObj)
  } catch (error) {
    console.error(error)
  }
  
}

export default getApiKey