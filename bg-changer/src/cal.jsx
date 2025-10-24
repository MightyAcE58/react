// import React, { useState } from "react";
// function Cube(){
//     const[cubes,setCubes]=useState([]);
//     const[number,setNumber]=useState(1);

//     const handleclick=()=>{
//         const cube=number*number*number;
//         setCubes([...cubes,cube]);
//         setNumber(number+1)
//     };
//     return(
//         <div style={{border:"none",padding:"5rem"}}>
//             <h1> Cube Calculator</h1>
//             <button onClick={handleclick} style={{border:"dotted"}}>Calculate the cube</button>
//    <div>
//        {cubes.map((cube,index)=>(
//             <div key ={index}>cube of {index+1} is {cube}</div>
//        ))}
//    </div>
//         </div>
//     );
// }
// export default Cube;



import { useState } from "react";

const allLanguages = ["English", "Hindi", "Marathi", "Tamil", "Telugu", "Kannada"];

export default function UserForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    languages: []
  });

  const [submitted, setSubmitted] = useState(null);

  
  const handleText = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };


  const handleLanguage = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => {
      return checked
        ? { ...prev, languages: [...prev.languages, value] } 
        : { ...prev, languages: prev.languages.filter((l) => l !== value) }; 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 640, padding: 16 }}>
      <h2>User Information</h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, marginBottom: 16 }}>
        <label style={{ display: "grid", gap: 6 }}>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleText}
            placeholder="Enter full name"
            required
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          Mobile
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleText}
            placeholder="e.g. 9876543210"
            required
          />
        </label>

        <fieldset style={{ border: "1px solid #ccc", padding: 10 }}>
          <legend>Languages Known</legend>
          {allLanguages.map((lang) => (
            <label key={lang} style={{ display: "inline-flex", alignItems: "center", gap: 6, marginRight: 12 }}>
              <input
                type="checkbox"
                name="languages"
                value={lang}
                checked={form.languages.includes(lang)}
                onChange={handleLanguage}
              />
              {lang}
            </label>
          ))}
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div style={{ background: "#f7f7f7", padding: 12, border: "1px solid #ddd" }}>
          <p><strong>Name</strong>: {submitted.name}</p>
          <p><strong>Mobile</strong>: {submitted.mobile}</p>
          <p><strong>Languages</strong>: {submitted.languages.length ? submitted.languages.join(", ") : "None"}</p>
        </div>
      )}
    </div>
  );
}

