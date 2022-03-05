import ToiletCard from "./Components/ToiletCard/ToiletCard";

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

const createToiletCards = (stateArray) => {
    const toiletCards = stateArray.map(toilet => {
        return (
            <ToiletCard
                key={toilet.id}
                id={toilet.id}
                location={toilet.location}
                region={toilet.region}
                type={toilet.type}
                post={this.postSafe}

                // addToUnsafe={this.addToUnsafe}
                isSafe={this.state.isSafe}
                toilet={toilet}
            />
        )
    })

    return toiletCards
}

export { cleanParkData, createToiletCards}