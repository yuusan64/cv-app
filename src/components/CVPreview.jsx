import React from 'react';

const CVPreview = ({ cvData, removeEducation, removeExperience }) => {
 console.log(cvData);
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
          <p>{edu.degree} at {edu.school}, {edu.from} - {edu.to}</p>
          <button onClick={() => removeEducation(index)}>Remove</button>
        </div>
      ))}
      <h2>Experience</h2>
      {cvData.experience.map((exp, index) => (
        <div key={index}>
          <p>{exp.role} at {exp.company}, {exp.from} - {exp.to}</p>
          <button onClick={() => removeExperience(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CVPreview;
