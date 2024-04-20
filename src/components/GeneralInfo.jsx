import React from 'react';
import FormInput from './FormInput';

export default function GeneralInfoForm({ generalInfo, handleGeneral }){
  return (
    <div>
      <h2>Personal Information</h2>
      <FormInput type="text" name="name" label="Full Name" value={generalInfo.name} onChange={handleGeneral} placeholder="Enter Full Name"/>
      <FormInput type="text" name="email" label="Email" value={generalInfo.email} onChange={handleGeneral} placeholder="Enter email"/>
      <FormInput type="tel" name="phone" label="Phone Number" value={generalInfo.phone} onChange={handleGeneral} placeholder="Enter phone number"/>
      <FormInput type="text" name="location" label="Location" value={generalInfo.location} onChange={handleGeneral} placeholder="City, Country"/>
    </div>
  );
}


