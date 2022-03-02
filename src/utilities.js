const cleanParkData = (parkInfo) => {
    const cleanedData = parkInfo.data.map(park => {
        return {
            id: park.id,
            name: park.fullName,
            description: park.description,
            entranceFee: park.entranceFees[2],
            entrancePass: park.entrancePasses,
            npsLink: park.directionsUrl,
            operatingHours: park.operatingHours[0].description,
            images: park.images,
            weather: park.weatherInfo
        }
    } )
    return cleanedData
}

export { cleanParkData }