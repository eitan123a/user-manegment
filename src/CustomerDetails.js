import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from './App.js'
import { useNavigate, useLocation } from "react-router-dom";

export const CustomerDetails = () => {
    const data = useContext(DataContext);
    let navigate = useNavigate();
    
    const [customer, setCustomer] = useState();
    const { search } = useLocation()
    const queryParams = new URLSearchParams(search);

    useEffect(()=>{
        const value = queryParams.get('id');
        let find = data.find(x => x._id===value);
    
        setCustomer({...find})
    }, [])
 

    return (
        <div >
            {
                (typeof customer != 'undefined') ? (
                    <>
                    <button id="back_button" onClick={() => navigate(-1)}>Back</button>
                    <div className="profile">
                        <p className="profile_headers">Name: <span className="profile_details">{customer.name.first} {customer.name.last}</span></p>
                        <p className="profile_headers">Status: <span className="profile_details">{customer.isActive === true ? "Active" : "InActive"}</span></p>
                        <img src={`${customer.picture}`}/>
                        <p className="profile_headers">Age: <span className="profile_details">{customer.age}</span></p>
                        <p className="profile_headers">Balance: <span className="profile_details">{customer.balance}</span></p>
                        <p className="profile_headers">Company: <span className="profile_details">{customer.company}</span></p>
                        <p className="profile_headers">Email: <span className="profile_details">{customer.email}</span></p>
                        <p className="profile_headers">Phone Number: <span className="profile_details">{customer.phone}</span></p>
                        <p className="profile_headers">Address: <span className="profile_details">{customer.address}</span></p>
                        <p className="profile_headers">About: <span className="profile_details">{customer.about}</span></p>
                        <p className="profile_headers">Registered At: <span className="profile_details">{customer.registered}</span></p>
                    </div>
                    </>
                ) : (
                    <p>Customer Not Found</p>
                )
            }
        </div>
    )
}