const ItineraryDetails = ({ itinerary }) => {
    return (
        <div className="itinerary-details">
            <h4>{itinerary.title}</h4>
            <p><strong>Destination: </strong>{itinerary.city}</p>
            <p><strong>Days of Travel: </strong>{itinerary.days}</p>
            <p><strong>Nationality: </strong>{itinerary.nationality}</p>
        </div>
    )
}

export default ItineraryDetails