
export default function ReusableForm({ formData, setFormData, fields, title }) {
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <h1>{title}</h1>
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
                            onChange={handleChange}
                        />
                    </div>
                ))}
            </form>
        </>
    );
}


