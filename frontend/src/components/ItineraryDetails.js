const ItineraryDetails = ({ itinerary, city }) => {
    return (
        <div className="itinerary-details">
            <h4>{itinerary.title}</h4>
            <p><strong>Destination: </strong>{itinerary.city}</p>
            <p><strong>Days of Travel: </strong>{itinerary.days}</p>
            <p><strong>Nationality: </strong>{itinerary.nationality}</p>
            <p><strong>Generated Itinerary: </strong>{itinerary.generatedText}</p>
        </div>
    )
}

export default ItineraryDetails