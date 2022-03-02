const getParkInfo = (name) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${name}&api_key=ZFh4J8ek4qkf10nPDT0FsTn1hgslzolLkGQMkXvd`)
        .then(response => response.json())
        .then(data => console.log('data', data))
}