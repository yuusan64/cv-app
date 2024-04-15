import { useState } from 'react'
import ReusableForm from './ReusableForm';

export default function GeneralInfo(props){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
    });

    const fields = [
        { id: 'name',     label: 'Full Name',     type: 'text',   placeholder: 'Full Name' },
        { id: 'email',    label: 'Email Address', type: 'email',  placeholder: 'Email Address'},
        { id: 'phone',    label: 'Phone Number',  type: 'number', placeholder: 'Phone Number'},
        { id: 'location', label: 'Location',      type: 'text',   placeholder: 'City, Country'},
    ];
    return <ReusableForm formData={formData} setFormData={setFormData} fields={fields} title="General Information" />;
}

