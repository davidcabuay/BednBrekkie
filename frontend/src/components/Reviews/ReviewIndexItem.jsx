import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


export default function ReviewIndexItem({review}){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    const avg = ((review.cleanliness+ review.communication + review.checkIn + review.accuracy + review.location+ review.value)/6)
    const rating = Math.round(avg *10)/10
    console.log(sessionUser)
    return(
        
            <div className="indexitemcontainer">
                
                <div className="author">{review.author}</div>
                    
                <div className="createdAt">{review.createdAt}</div>
                
                <div className='body'>{review.body}</div>

            </div>
        
    )
}