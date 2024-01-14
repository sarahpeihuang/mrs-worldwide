import { createContext, useReducer } from 'react'

export const ItineraryContext = createContext()

export const itinerariesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ITINERARIES':
            return {
                itineraries: action.payload
            }
        case 'CREATE_ITINERARY':
            return{
                itineraries: [action.payload, ...state.itineraries]
            }
        default:
            return state
    }
}


export const ItineraryContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(itinerariesReducer, {
        itineraries: null
    })

    return (
        <ItineraryContext.Provider value={{...state, dispatch}}>
            { children }
        </ItineraryContext.Provider>
    )
}