import { useState } from 'react'

export default function GeneralInfo(props){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
    });

    const handleGeneralInfo = (event)=>{
    
    const {name, value} = event.target;

    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }));

    }

    const fields = [
        { id: 'name',     label: 'Full Name',     type: 'text',   placeholder: 'Full Name' },
        { id: 'email',    label: 'Email Address', type: 'email',  placeholder: 'Email Address'},
        { id: 'phone',    label: 'Phone Number',  type: 'number', placeholder: 'Phone Number'},
        { id: 'location', label: 'Location',      type: 'text',   placeholder: 'City, Country'},
    ];
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
                        onChange={handleGeneralInfo}
                    />
                </div>
            ))}
        </form>
    </>
    );
}

