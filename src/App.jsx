
import './App.css'
import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import GeneratedCv from './components/GeneratedCv'

function App() {

  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
});

   const [education, setEducation] = useState({
    schoolName: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: ''
});
  
   const [experience, setExperience] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
});

  return (
    <>
    <div className="container">
    <div className="form-section">
      <GeneralInfo data={generalInfo} setData={setGeneralInfo}/>
      <Education data={education} setData={setEducation}/>
      <Experience data={experience} setData={setExperience}/>
    </div>

    <div className="cv-display">
    <GeneratedCv general={generalInfo} education={education} experience={experience} />
    </div>
    </div>    
    </>
  )
}

export default App
