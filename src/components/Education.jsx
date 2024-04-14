import { useState } from "react";

export default function Education(props){

const [formData, setFormData] = useState({
    schoolName: '',
    degree: '',
    startDate: '',
    endDate:'',
    location:''
})    


const handleEducation =(event)=>{

    const {name, value} = event.target;

    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }));

}

const fields = [
    { id: 'schoolName', label: 'School',     type: 'text',  placeholder: 'Enter School / University' },
    { id: 'degree',     label: 'Degree',     type: 'text',  placeholder: 'Enter Degree / Field Of Study'},
    { id: 'startDate',  label: 'Start Date', type: 'date'},
    { id: 'endDate',    label: 'End Date',   type: 'date'},
    { id: 'location',   label: 'Location',   type: 'text',  placeholder: 'City, Country'},
]

    return(
    <>

    <h1>{props.title}</h1>
     <form>
       
       {fields.map(field => (
        <div key={field.id}>
        <label htmlFor={field.id}>{field.label}</label>
        <input
            type={field.type}
            id={field.id}
            name={field.id}
            placeholder={field.placeholder}
            value={formData[field.id]}
            onChange={handleEducation}
        />
        </div>
       ))}
      </form>
      
      </>  
    );
}