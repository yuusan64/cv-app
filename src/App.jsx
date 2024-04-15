
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import GeneratedCv from './components/GeneratedCv'

function App() {


  return (
    <>
    <div className="container">
    <div className="form-section">
      <GeneralInfo/>
      <Education/>
      <Experience />
    </div>

    <div className="cv-display">
      <GeneratedCv general={GeneralInfo} education={Education} experience={Experience}/>
    </div>
    </div>    
    </>
  )
}

export default App
