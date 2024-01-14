import { ItineraryContext } from "../context/ItineraryContext";
import { useContext } from "react";

export const useItinerariesContext = () => {
    const context = useContext(ItineraryContext)

    if (!context){
        throw Error('useItinerariesContext must be used inside an ItinerariesContextProvider')
    }
    return context
}