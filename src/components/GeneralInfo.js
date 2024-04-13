import { useState } from 'react'

export default function GeneralInfo(){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");

    const handleGeneralInfo = (event)=>{

    }

    return(
    <>
    <input 
    type='text'
    name='name'
    value={name}
    onChange={handleGeneralInput}
    placeholder='Full Name'
    />
    
    <input 
    type='email'
    name='email'
    value={email}
    onChange={handleGeneralInput}
    placeholder='Email Address'
    />

    <input 
    type='number'
    name='number'
    value={phone}
    onChange={handleGeneralInput}
    placeholder='Phone Number'
    />

    <input 
    type='text'
    name='location'
    value={location}
    onChange={handleGeneralInput}
    placeholder='City, Country'
    />

    
    
    
    </>
    );
}