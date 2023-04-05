import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getListings,fetchListings } from "../../store/listing";






function Map(){
    const dispatch = useDispatch();
    const history = useHistory();
    const listings = useSelector(getListings)

    useEffect(()=>{
        dispatch(fetchListings)
    })

    const center = useMemo(() => ({lat: 37.8, lng: -122.4}), [])

    const handleMarkerClick = (listing) => {
        history.push(`/listings/${listing.id}`);
    }
    
    return (
        <div>
            <GoogleMap
            zoom = {10}
            center ={center}
            mapContainerClassName="index-map-container"
            >
                {listings.map((listing) =>
                    <div>
                        <MarkerF onClick={() => handlePinClick(listing)} position={{lat: listing.latitude, lng: listing.longitude}} key={listing.id} />
                    </div>
                )}
            </GoogleMap>
        </div>
    )
}


export default function IndexMap(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })

    if(!isLoaded) return <div>Loading...</div>;
    return <Map />
    return(
        <div>
            <Map/>
        </div>
    )
}

