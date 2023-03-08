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
import { showLoginModal } from '../../../store/ui';



export default function ReservationForm({listing}){
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
            dispatch(fetchListing(listing.id)) 
    }, [dispatch, listing.id])

    const [checkIn, setCheckIn] = useState()
    const [checkOut, setCheckOut] = useState()
    const [numGuest, setNumGuest] = useState(1)
    const [overbookModal, setOverbookModal] = useState(false)
    const [noDateModal, setNoDateModal] = useState(false)

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
                if (!lengthOfStay) {
                    setNoDateModal(true);
                }else{
                    setOverbookModal(true);
                }
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
        <div className={lengthOfStay ? "reservationform" : 'smallreservation'}>
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
                        <button className='guestbutton' onClick={subtractGuest}>-</button>
                        <div>{numGuest}</div>
                        <button className='guestbutton' onClick={addGuest}>+</button>
                    </div>
                </div>
                <div className='rbtndiv' >
                    {/* <button className='reservebutton'>{buttonType}</button> */}
                    {(sessionUser) ? <button className='reservebutton'>Reserve</button> : <button className='requireLoginButton' onClick={()=>dispatch(showLoginModal())}>Log in required</button> }
                    {overbookModal && (
                        <Modal>
                            <p className='errorMessage'>Too late!</p>
                            <p className='errorMessage'>It looks like your requested dates for this listing have already been booked.</p>
                            <p className='errorMessage'>Kindly select new check-in and checkout dates.</p>
                            <button className='errorButton' onClick={()=> setOverbookModal(false)}>Close</button>
                        </Modal>
                    )}
                    {noDateModal && (
                        <Modal>
                            <p className='errorMessage'> Hey there!</p>
                            <p className='errorMessage'> It looks like you forgot to select your check-in and checkout dates.</p>
                            <button className='errorButton' onClick={()=> setNoDateModal(false)}>Close</button>
                        </Modal>
                    )}
                </div>
            </form>
            {costContainer}
        </div>
    )
}