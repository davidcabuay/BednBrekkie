import {useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { getReservation, fetchReservation, createReservation, updateReservation } from '../../../store/reservation';
import { getListing, fetchListing } from '../../../store/listing';
import './reservationform.css'
import Calendar from '../../Calendar';
import ReservationIndex from '../ReservationIndex';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../../context/Modal';
import LoginFormModal from '../../LoginFormModal';
import SignupFormModal from '../../SignupFormModal';



export default function ReservationForm({listing}){
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);

    useEffect(()=>{
            dispatch(fetchListing(listing.id)) 
    }, [dispatch, listing.id])

    const [checkIn, setCheckIn] = useState()
    const [checkOut, setCheckOut] = useState()
    const [numGuest, setNumGuest] = useState(1)
    const [overbookModal, setOverbookModal] = useState(false)

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
    const buttonType = sessionUser ? 'Reserve' : 'Sign In Required'
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(sessionUser){
            const resData = {
                listing_id: listing.id, 
                booker_id: sessionUser.id, 
                check_in: checkIn, 
                check_out: checkOut, 
                num_of_guests: numGuest}
            try{
                await dispatch(createReservation(resData)) ; 
                history.push('/reservations')
            }catch(error){
                setOverbookModal(true);
            }
        }
    }

    const lengthOfStay= Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    
    const guestFee = numGuest < 3 ? 0 : (numGuest -2) * 50;

    const basePrice = lengthOfStay*listing.price + guestFee;

    const cleaningFee = Math.floor(basePrice*0.10);

    const bnbFee = Math.floor(basePrice*0.15);

    const totalPrice = basePrice + cleaningFee + bnbFee;
    


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
                    {/* <button className='reservebutton'>{buttonType}</button> */}
                    {(sessionUser) ? <button className='reservebutton'>{buttonType}</button> : <LoginFormModal loginModal={loginModal}
                    setLoginModal={setLoginModal}
                    setSignupModal={setSignupModal}/> }
                    {overbookModal && (
                        <Modal>
                            <p> Too late! Your requested dates for this listing have already been booked. Please select new check-in and checkout dates.</p>
                            <button onClick={()=> setOverbookModal(false)}>Close</button>
                        </Modal>
                    )}
                </div>
            </form>
            {costContainer}
        </div>
    )
}