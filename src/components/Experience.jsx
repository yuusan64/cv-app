import React from 'react';
import FormInput from './FormInput';

export default function Experience({ experience, handleExperience, addExperience }) {

  const handleChange = (field) => (e) => {
    handleExperience(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div>
      <h2>Experience</h2>
      <FormInput type="text" name="company" label="Company" value={experience.company} onChange={handleChange('company')} placeholder="Company Name" />
      <FormInput type="text" name="role" label="Role" value={experience.role} onChange={handleChange('role')} placeholder="Role"/>
      <FormInput type="date" name="from" label="From" value={experience.from} onChange={handleChange('from')} placeholder="From"/>
      <FormInput type="date" name="to" label="To" value={experience.to} onChange={handleChange('to')} placeholder="To"/>
      <button onClick={addExperience}>Add Experience</button>
    </div>
  );
}
