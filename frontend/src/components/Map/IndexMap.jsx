import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getListings,fetchListings } from "../../store/listing";
import './indexmap.css'






function Map(){
    const dispatch = useDispatch();
    const history = useHistory();
    const listings = useSelector(getListings)

    useEffect(()=>{
        dispatch(fetchListings)
    })
    
    const center = useMemo(() => ({lat: 37.677060, lng: -122.490560}), [])

    const handleMarkerClick = (listing) => {
        history.push(`/listings/${listing.id}`);
    }
    
    if (!listings) return null;

    return (
        <div className="indexmapcontainer">
            <GoogleMap
            zoom = {8}
            center ={center}
            mapContainerClassName="index-map-container"
            >
                {listings.map((listing) =>
                    <div>
                        <Marker 
                            onClick={() => handleMarkerClick(listing)} 
                            position={{lat: listing.lat, lng: listing.long}} 
                            key={listing.id} label={`\$${listing.price}`}
                            style={{ fontSize: '8px', color: "white"}}/>
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
}

