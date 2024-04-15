import { useState } from "react";
import ReusableForm from "./ReusableForm";

export default function Education(props){

const [formData, setFormData] = useState({
    schoolName: '',
    degree: '',
    startDate: '',
    endDate:'',
    location:''
})    


const fields = [
    { id: 'schoolName', label: 'School',     type: 'text',  placeholder: 'Enter School / University' },
    { id: 'degree',     label: 'Degree',     type: 'text',  placeholder: 'Enter Degree / Field Of Study'},
    { id: 'startDate',  label: 'Start Date', type: 'date'},
    { id: 'endDate',    label: 'End Date',   type: 'date'},
    { id: 'location',   label: 'Location',   type: 'text',  placeholder: 'City, Country'},
]
  

  return <ReusableForm 
  formData={formData} setFormData={setFormData} fields={fields} title="Education" />;

}