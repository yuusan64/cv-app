
import React from 'react';
import FormInput from './FormInput';

export default function Education({ education, handleEducation, addEducation }){

  // Using separate handlers for each field
  const handleChange = (field) => (e) => {
    handleEducation(prev => {
      const updated = { ...prev, [field]: e.target.value };
      console.log("Updated state within updater:", updated);
      return updated;
    });
  };
  

  return (
    <div>
      <h2>Education</h2>
      <FormInput type="text" name="school" label="School" value={education.school} onChange={handleChange('school')} placeholder="School Name" />
      <FormInput type="text" name="degree" label="Degree" value={education.degree} onChange={handleChange('degree')} placeholder="Degree"/>
      <FormInput type="month" name="from" label="From" value={education.from} onChange={handleChange('from')} placeholder="From"/>
      <FormInput type="month" name="to" label="To" value={education.to} onChange={handleChange('to')} placeholder="To"/>
      <button onClick={addEducation}>Add Education</button>
    </div>
  );
}
