import React from 'react';
import { format, parseISO } from 'date-fns';

const CVPreview = ({ cvData, removeEducation, removeExperience }) => {
  const formatDate = (dateStr) => {
    // Formats the date to 'Month YYYY', e.g., 'January 2020'
    return format(parseISO(dateStr), 'MMMM yyyy'); 
  };


  return (
    <div className="cv-preview">
      
      <div className="general">
        <h1>{cvData.generalInfo.name}</h1>

        <div className="general-sub">
          <h3>{cvData.generalInfo.email}</h3>
          <h3>{cvData.generalInfo.phone}</h3>
          <h3>{cvData.generalInfo.location}</h3>
        </div>
      </div>

      <h2>Education</h2>
      {cvData.education.map((edu, index) => (
        <div key={index}>
          <div className='edu-title'>
            <p>{edu.degree} at {edu.school}</p>
            <p> {formatDate(edu.from)} - {formatDate(edu.to)}</p>
          </div>
          <button onClick={() => removeEducation(index)}>Remove</button>
        </div>
      ))}
      <h2>Experience</h2>
      {cvData.experience.map((exp, index) => (
        <div key={index}>
          <div className='exp-title'>
            <p>{exp.role} at {exp.company}</p>
            <p> {formatDate(exp.from)} - {formatDate(exp.to)}</p>
          </div>
          <p>{exp.description}</p>
          <button onClick={() => removeExperience(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CVPreview;
