import React, { useState } from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import CVPreview from './components/CVPreview';

function App() {
  const [cvData, setCvData] = useState({
    generalInfo: {
      name: '',
      email: '',
      phone: '',
      location: ''
    },
    education: [],
    experience: []
  });

  // Temporary states for adding new entries
  const [newEducation, setNewEducation] = useState({ school: '', degree: '', from: '', to: ''  });
  const [newExperience, setNewExperience] = useState({ company: '', role: '', from: '', to: '', description:'' });

  const handleGeneral = (event) => {
   
    const { name, value } = event.target;
    setCvData(prev => ({
      ...prev,
      generalInfo: {
        ...prev.generalInfo,
        [name]: value
      }
    }));
  };

  // Function to add a new education entry
  const addEducation = () => {
    setCvData(prev => ({
      ...prev,
      education: [...prev.education, newEducation]
    }));
    // Reset the new education input fields
    setNewEducation({ school: '', degree: '', from: '', to: '' }); 
  };

  const removeEducation = (index) => {
    setCvData(prev => {
      //Create copy of the education array
      let newEducation = [...prev.education];
      //Use splice on the copy to remove the item
      newEducation.splice(index, 1);
      //Return new state with the updated array
      return {
        ...prev,
        education: newEducation
      };
    });
  };
  
 
  const addExperience = () => {
    setCvData(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }));
    setNewExperience({ company: '', role: '', from: '', to: '', description:'' }); 
  };

  const removeExperience = (index) => {
    setCvData(prev => {
      //Create copy of the education array
      let newExperience = [...prev.experience];
      //Use splice on the copy to remove the item
      newExperience.splice(index, 1);
      //Return new state with the updated array
      return {
        ...prev,
        experience: newExperience
      };
    });
  };
  return (
    <div className="App">
      <div className="form-container">
        <GeneralInfo
          generalInfo={cvData.generalInfo}
          handleGeneral={handleGeneral}
        />
        <Education
          education={newEducation}
          handleEducation={setNewEducation}
          addEducation={addEducation}
        />
        <Experience
          experience={newExperience}
          handleExperience={setNewExperience}
          addExperience={addExperience}
        />
      </div>
      <div className="cv-preview-container">
    <CVPreview cvData={cvData} removeEducation={removeEducation} removeExperience={removeExperience} />
</div>

    </div>
  );
}

export default App;
