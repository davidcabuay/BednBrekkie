import csrfFetch from './csrf';


export const SET_REVIEW = 'review/SET_REVIEW'
export const SET_REVIEWS = 'review/SET_REVIEWS'
export const REMOVE_REVIEW = 'review/REMOVE_REVIEW'

const setReview = (payload) => {
    return {
        type: SET_REVIEW,
        payload
        
    }
}

const setReviews = (reviews) => {
    return {
        type: SET_REVIEWS,
        reviews
    }
}

const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const getReview = (reviewId) => (state) => {
    return state.reviews ? state.reviews[reviewId] : null
}

export const getReviews = (state) => {
    return state.reviews ? Object.values(state.reviews) : []
}

export const fetchReviews = () => async(dispatch)=> {
    const response = await csrfFetch('/api/reviews')
    if (response.ok){
        const reviews = await response.json();
        dispatch(setReviews(reviews))
    }
}

export const fetchReview = (reviewId) => async(dispatch)=> {
    const response = await csrfFetch(`/api/reviews/${reviewId}`)
    if (response.ok){
        const review = await response.json();
        dispatch(setReview(review))
    }
}
export const createReview = (review) => async(dispatch) => {

    const response = await csrfFetch(`/api/reviews`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(review)
    })
    if (response.ok){
        const newreview = await response.json();
        dispatch(setReview(newreview))
    }
}

export const updateReview = (review) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(review)
    })
    if (response.ok){
        const editreview = await response.json();
        dispatch(setReview(editreview))
    }
}

export const deleteReview = (reviewId) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE",
    })
    if (response.ok){
        dispatch(removeReview(reviewId))
    }
}

const reviewsReducer = (state= {}, action) =>{
    const newState = {...state};
    switch (action.type) {
        case SET_REVIEWS:
            return action.reviews;
        case SET_REVIEW:
            // return {...newState, [action.payload.review.id] : action.payload.review}
            const review = action.payload.review;
            newState[review.id] = review;
            return newState;
        case REMOVE_REVIEW:
            delete newState[action.reviewId]
            return newState
        default:
            return state;
    }
}

export default reviewsReducer