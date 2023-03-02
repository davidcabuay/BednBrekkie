import csrfFetch from './csrf';

export const SET_RESERVATION = 'reservation/SET_RESERVATION'
export const SET_RESERVATIONS = 'reservation/SET_RESERVATION'
export const REMOVE_RESERVATION = 'reservation/REMOVE_RESERVATION'

const setReservation = (reservation) => {
    return {
        type: SET_RESERVATION,
        reservation
    }
}

const setReservations = (reservations) => {
    return {
        type: SET_RESERVATIONS,
        reservations
    }
}

const removeReservation = (reservationId) => {
    return {
        type: REMOVE_RESERVATION,
        reservationId
    }
}

export const getReservation = (reservationId) => (state) => {
    return state.reservations ? state.reservations[reservationId] : null
}

export const getReservations = (state) => {

    return state.reservations ? Object.values(state.reservations) : []
}

export const fetchReservations = () => async(dispatch)=> {
    const response = await csrfFetch(`/api/reservations`)
    if (response.ok){
        const reservations = await response.json();
        dispatch(setReservations(reservations))
    }
}

export const fetchReservation = (reservationId) => async(dispatch)=> {
    const response = await csrfFetch(`/api/reservations/${reservationId}`)
    if (response.ok){
        const reservation = await response.json();
        dispatch(setReservation(reservation))
    }
}
export const createReservation = (reservation) => async(dispatch) => {
    const response = await fetch(`/api/ponseervations`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(ponseervation)
    })
    if (response.ok){
        const newreservation = await response.json();
        dispatch(setReservation(newreservation))
    }
}

export const updateReservation = (reservation) => async(dispatch) => {
    const response = await fetch(`/api/reservations/${reservation.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(reservation)
    })
    if (response.ok){
        const editreservation = await response.json();
        dispatch(setReservation(editreservation))
    }
}

export const deleteReservation = (reservationId) => async(dispatch) => {
    const response = await fetch(`/api/reservations/${reservationId}`, {
        method: "DELETE",
    })
    if (response.ok){
        dispatch(removeReservation(reservationId))
    }
}
// const initialState = { 
//     user: JSON.parse(sessionStorage.getItem("reservations"))
// };

const reservationsReducer = (state= {}, action) =>{
    const newState = {...state};
    switch (action.type) {
        case SET_RESERVATIONS:
            return action.reservations;
        case SET_RESERVATION:
            const reservation = action.reservation;
            newState[reservation.id] = reservation;
            return newState;
        case REMOVE_RESERVATION:
            delete newState[action.reservationId]
            return newState
        default:
            return state;
    }
}

export default reservationsReducer