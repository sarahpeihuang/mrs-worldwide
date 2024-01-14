import { useEffect } from 'react'
import { useItinerariesContext } from '../hooks/useItineraryContext'

// components
import ItineraryDetails from '../components/ItineraryDetails'

const Home = () => {
    const {itineraries, dispatch} = useItinerariesContext()

    useEffect(() => {
        const fetchItineraries = async () => {

            try{
                const response = await fetch('/api/itinerary')
                const json = await response.json()

                if (response.ok) {
                    dispatch({type: 'SET_ITINERARIES', payload: json})
                }
            } catch (error) {
            console.error('NOT WORKING!!!:', error)
            }
        } 

        fetchItineraries()
    }, [])

    return(
        <div className="home">
            <div className="itineraries">
                {itineraries && itineraries.map((itinerary) => (
                    <ItineraryDetails 
                    key={itinerary._id} 
                    itinerary={itinerary}/>
                ))}
            </div>            
        </div>
    )
}

export default Home