const ItineraryDetails = ({ itinerary, city }) => {
    const formattedText = itinerary.generatedText
      .split('\n') // Split the text into paragraphs
      .map((paragraph) => {
        // Check if the paragraph contains "Day X" and add indentation
        if (paragraph.startsWith('Day ')) {
          return (
          <p className="day-header">
            {paragraph}
            <br />
            </p>
      )
      }
        // Regular paragraphs without indentation
        return <p>{paragraph}</p>;
      });
  
    return (
      <div className="itinerary-details">
        <h4>{itinerary.title}</h4>
        <p><strong>Destination: </strong>{itinerary.city}</p>
        <p><strong>Days of Travel: </strong>{itinerary.days}</p>
        <p><strong>Nationality: </strong>{itinerary.nationality}</p>
        <div className="formatted-text">{formattedText}</div>
      </div>
    );
  };
  
  export default ItineraryDetails;
  