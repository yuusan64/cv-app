import { useState } from "react";
import ReusableForm from "./ReusableForm";

export default function Experience(props){

    const [formData, setFormData] = useState({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
    });

    const fields = [
        { id: 'company',     label: 'Company Name',   type: 'text',  placeholder: 'Enter Company Name' },
        { id: 'position',    label: 'Position Title', type: 'text',  placeholder: 'Enter Position Title'},
        { id: 'startDate',   label: 'Start Date',     type: 'date'},
        { id: 'endDate',     label: 'End Date',       type: 'date'},
        { id: 'location',    label: 'Location',       type: 'text',  placeholder: 'City, Country'},
        { id: 'description', label:'Description',     type: 'text',  placeholder: 'Description'}
    ]
    
    return <ReusableForm formData={formData} setFormData={setFormData} fields={fields} title="Experience" />;
    }
