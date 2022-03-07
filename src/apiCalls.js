import { cleanParkData } from "./utilities"
import Error from './Components/Error/Error'

const getParkInfo = (name) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${name}&api_key=ZFh4J8ek4qkf10nPDT0FsTn1hgslzolLkGQMkXvd`)
        .then(response => checkResponse(response))
        .then(data => cleanParkData(data))
}

const getToiletInfo = (name) => {
    return fetch(`https://piddles-api.herokuapp.com/api/v1/toilets/${name}`)
        .then(response => checkResponse(response))
}

const getToiletPostings = () => {
    return fetch('https://piddles-api.herokuapp.com/api/v1/reviews')
        .then(response => checkResponse(response))
}

const postToilet = (newRating) => {
    return fetch('https://piddles-api.herokuapp.com/api/v1/reviews', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRating),
    })
        .then(response => checkResponse(response))
};

const deleteRatedToilet = (id) => {
    return fetch(`https://piddles-api.herokuapp.com/api/v1/reviews/${id}`, {
        method: 'DELETE'
    })
}

const checkResponse = (response) => {
    if(!response.ok) {
        throw new Error(`Error`)
    } else {
        return response.json()
    }
}

export { getParkInfo, getToiletInfo, getToiletPostings, postToilet, deleteRatedToilet }