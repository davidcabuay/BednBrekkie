import csrfFetch from './csrf';

export const SET_LISTING = 'listing/SET_LISTING'
export const SET_LISTINGS = 'listing/SET_LISTINGS'

const setListing = (listing) => {
    return {
        type: SET_LISTING,
        listing
    }
}

const setListings = (listings) => {
    return {
        type: SET_LISTINGS,
        listings
    }
}

export const getListing = (listingId) => (state) => {
    return state.listings? state.listings[listingId] : null
}

export const getListings = (state) => {
    return state.listings? Object.values(state.listings) : []
}

export const fetchListings = () => async(dispatch)=>{
    const response = await csrfFetch(`api/listings`)
    if (response.ok){
        const listings = await response.json();
        dispatch(setListings(listings))
    }
}

export const fetchListing = (listingId) => async(dispatch)=> {
    const response = await csrfFetch(`api/listings/${listingId}`)
    if (response.ok){
        const listing = await response.json();
        dispatch(setListing(listing))
    }
}

const listingsReducer = (state={}, action) =>{
    switch (action.type) {
        case SET_LISTINGS:
            return action.listings;
        case SET_LISTING:
            const newState = {...state};
            const listing = action.listing;
            newState[listing.id] = listing;
            return newState;
        default:
            return state;
    }
}

export default listingsReducer