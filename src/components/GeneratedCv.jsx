

export default function GeneratedCv(props){

    const generalInfo = props.general;
    const experience = props.experience;
    const education = props.education;

    console.log(generalInfo);
   
    let fields=[generalInfo, experience, education];
    return(
        <>
         {fields.map(field=>{
          <div key={field.id}>
          <h1>{field.title}</h1>
          </div>
         })
        }
         </>
    )
}