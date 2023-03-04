import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { getReservation, fetchReservation, createReservation, updateReservation } from '../../../store/reservation';
import { getListing, fetchListing } from '../../../store/listing';
import './reservationform.css'
import Calendar from '../../Calendar';



export default function ReservationForm({listing}){
    const dispatch = useDispatch();
    // const {reservationId, listingId} = useParams();
    // const formType = reservationId ? 'Update Reservation' : 'New Reservation'
    // if (!reservation){
    //     reservation = {checkIn: Date(), checkOut:  Date(), numOfGuests: 1}
    // }
    
    



    useEffect(()=>{
        // if(reservationId){
        //     dispatch(fetchReservation(reservationId));
            dispatch(fetchListing(listing.id))
        
    }, [dispatch, listing.id])

    const [checkIn, setCheckIn] = useState()
    const [checkOut, setCheckOut] = useState()
    const [numGuest, setNumGuest] = useState(1)

    const maxguest = listing.numOfGuests;

    const addGuest = (e) =>{
        e.preventDefault();
        if (numGuest<maxguest){
            setNumGuest(numGuest+1)
        }
    }
    const subtractGuest = (e) =>{
        e.preventDefault();
        if (numGuest>1){
            setNumGuest(numGuest-1)
        }
    }

    const sessionUser = useSelector(state => state.session.user)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(sessionUser){
        const resData = {listing_id: listing.id, booker_id: sessionUser.id, check_in: checkIn, check_out: checkOut, num_of_guests: numGuest}
        dispatch(createReservation(resData))  
        console.log(resData)
        }
    }

    const lengthOfStay= Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    
    const guestFee = numGuest < 3 ? 0 : (numGuest -2) * 50;

    const basePrice = lengthOfStay*listing.price + guestFee;

    const cleaningFee = Math.floor(basePrice*0.10);

    const bnbFee = Math.floor(basePrice*0.15);

    const totalPrice = basePrice + cleaningFee + bnbFee;
    
    console.log(lengthOfStay)

    let costContainer;
        if (lengthOfStay>0) {
            costContainer =
                <div className='costcontainer'>
                    <div className='nightprice'>
                        <div>${listing.price} x {lengthOfStay} { lengthOfStay > 1 ? 'nights' : 'night'}</div>
                        <div>${basePrice}</div>
                    </div>
                    <div>
                        <div>Cleaning Fee</div>
                        <div>${cleaningFee}</div>
                    </div>
                    <div>
                        <div>BednBrekkie Fee</div>
                        <div>${bnbFee}</div>
                    </div>
                    <div className='totalprice'>
                        <div>Total before taxes</div>
                        <div>${totalPrice}</div>
                    </div>
                </div>
            } else {
                costContainer = <></>
            }

    
    return(
        <div className="reservationform">
            <form className='formcontainer' onSubmit={handleSubmit}>
                <div className='listprice'>${listing.price} night</div>
                <div className='calendarcontainer'>
                    <Calendar 
                        checkIn={checkIn} 
                        checkOut={checkOut}
                        setCheckIn={setCheckIn} 
                        setCheckOut={setCheckOut}  
                        />
                </div>
                <div className='guestForm'>
                    <div>Guests</div>
                    <div className='guestChanger'>
                        <button onClick={subtractGuest}>-</button>
                        <div>{numGuest}</div>
                        <button onClick={addGuest}>+</button>
                    </div>
                </div>
                <div className='rbtndiv' >
                    <button className='reservebutton'>Reserve</button>
                </div>
            </form>
            {costContainer}
        </div>
    )
}