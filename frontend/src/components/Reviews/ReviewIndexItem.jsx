import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";


export default function ReviewIndexItem({review}){
    // const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user)
    const options = {year: 'numeric', month: 'long', day: 'numeric' };
    let rawdate;  
    if (review.createdAt){
        rawdate = review.createdAt
        }else{
            rawdate= new Date();
        }
    let date = rawdate.toLocaleDateString("en-US", options)
    // const avg = ((review.cleanliness+ review.communication + review.checkIn + review.accuracy + review.location+ review.value)/6)
    // const rating = Math.round(avg *10)/10
    console.log('created at', date)
    return(
        
            <div className="indexitemcontainer">
                
                <div className="author">{review.author}</div>
                    
                <div className="createdAt">{date}</div>
                
                <div className='body'>{review.body}</div>

            </div>
        
    )
}
