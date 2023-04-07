// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useMemo } from "react";
import './showmap.css'
import { useLoadScript, Marker, GoogleMap } from "@react-google-maps/api";

function Map({listing}){
    const center = useMemo(() => ({lat: listing.lat, lng: listing.long}), [])
    if (!listing) return null;

    return (
        <div className='showmap'>
            <GoogleMap
            zoom = {10}
            center ={center}
            mapContainerClassName="show-map-container"
            >
                <Marker position={center} />
                
            </GoogleMap>
        </div>
    )
}


export default function ShowMap({listing}){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })

    if(!isLoaded) return <div>Loading...</div>;
    return <Map listing={listing}/>
}

