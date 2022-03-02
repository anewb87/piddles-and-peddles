import { cleanParkData } from "./utilities"

const getParkInfo = (name) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${name}&api_key=ZFh4J8ek4qkf10nPDT0FsTn1hgslzolLkGQMkXvd`)
        .then(response => checkResponse(response))
        .then(data => cleanParkData(data))
}

const checkResponse = (response) => {
    if(!response.ok) {
        throw new Error(`Error`)
    } else {
        return response.json()
    }
}

export { getParkInfo }