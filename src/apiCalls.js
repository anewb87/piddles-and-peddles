import { cloneElement } from "react"
import { cleanParkData } from "./utilities"

const getParkInfo = (name) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${name}&api_key=ZFh4J8ek4qkf10nPDT0FsTn1hgslzolLkGQMkXvd`)
        .then(response => checkResponse(response))
        .then(data => cleanParkData(data))
}
//old way, individual 
// const getToiletInfo = (name) => {
//     return fetch(`https://piddles-api.herokuapp.com/api/v1/${name}`)
//         .then(response => checkResponse(response))
// }

const getToiletInfo = (name) => {
    return fetch(`https://piddles-api.herokuapp.com/api/v1/toilets/${name}`)
        .then(response => checkResponse(response))
}

const getToiletRatings = () => {
    return fetch('https://piddles-api.herokuapp.com/api/v1/reviews')
        .then(response => checkResponse(response))
}

const rateToilet = (newRating) => {
    return fetch('https://piddles-api.herokuapp.com/api/v1/reviews', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRating),
    })
        .then(response => checkResponse(response))
};

const checkResponse = (response) => {
    if(!response.ok) {
        throw new Error(`Error`)
    } else {
        return response.json()
    }
}

export { getParkInfo, getToiletInfo, getToiletRatings, rateToilet }