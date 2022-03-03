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
    return cleanedData[0]
}

// const checkParkBasedOnUrl = () => {
//     if (window.location.href.indexOf('arch') > -1) {
//         getInfo('arch')
//         console.log('working?')
//     } else if (window.location.href.indexOf('brca') > -1) {
//         getInfo('brca')
//     } else if (window.location.href.indexOf('cany') > -1) {
//         getInfo('cany')
//     } else if (window.location.href.indexOf('care') > -1) {
//         getInfo('care')
//     } else if (window.location.href.indexOf('zion') > -1) {
//         getInfo('zion')
//     }
// }

export { cleanParkData}