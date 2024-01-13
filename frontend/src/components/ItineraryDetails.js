const ItineraryDetails = ({ itinerary }) => {
    return (
        <div className="itinerary-details">
            <h4>{itinerary.title}</h4>
            <p><strong>Title: </strong>{itinerary.title}</p>
            <p><strong>Destination: </strong>{itinerary.city}</p>
            <p><strong>Days of Travel: </strong>{itinerary.name}</p>
        </div>
    )
}

export default ItineraryDetails