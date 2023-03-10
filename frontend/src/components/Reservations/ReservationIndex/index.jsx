import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReservationIndexItem from './ReservationIndexItem';
import { getReservations, fetchReservations } from '../../../store/reservation';
import ListingIndex from '../../Listings/ListingIndex';
import './reservation.css'

export default function ReservationIndex(){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    let allReservations = useSelector(getReservations);
    let userReservations = allReservations.filter(reservation =>
        reservation.bookerId === sessionUser.id
    )
    useEffect(()=>{
        dispatch(fetchReservations())
    }, [dispatch])


    if (sessionUser){
    return(
        <div className='indexpage'>
            <div className='reservationindextitle'>My Reservations</div>
        <div className = "reservationsContainer">{userReservations.map((reservation)=> <ReservationIndexItem key={reservation.id} reservation={reservation} className="listItem"/>)}</div>
        </div>
    )}else{
        return(
            <ListingIndex />
        )
    }

}