import React from "react";

// const INITIAL_DATA = {
//   title: "",
//   professionalExperience: "",
//   Education: "",
//   file: ""
// }

// function formReducer(state, action){
//   console.log(state, action)
//   switch (action.type) {
//     case 'change_value':
//       const {name, value} = action.payload
//       state = {
//         ...state,
//         [name]: value
//       }
//       return state
//     default:
//       return state
//   }
// }

export default function ProfessionalInformationForm({ inputValues, dispatch }) {
  // const [ inputValues, dispatch ] = React.useReducer(formReducer, INITIAL_DATA)

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form enviado");
  }

  function handleSkipt(e) {
    e.preventDefault();
    console.log("Skipt");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    dispatch({
      type: "change_value",
      payload: {
        name: name,
        value: value,
      },
    });
    // console.log(name, value)
  }
  return (
    <>
      <label className="form__label" htmlFor="title">
        TITLE
      </label>
      <input
        value={inputValues.title}
        onChange={handleChange}
        placeholder="title"
        className="form__title input"
        name="title"
        type="text"
        required
      />

      <label className="form__label" htmlFor="experience">
        PROFESSIONAL EXPERIENCE
      </label>
      <input
        value={inputValues.experience}
        onChange={handleChange}
        placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
        className="form__experience input"
        name="experience"
        type="text"
      />

      <label className="form__label" htmlFor="education">
        EDUCATION
      </label>
      <input
        value={inputValues.education}
        onChange={handleChange}
        placeholder="Major in life experiences with a PHD in procrastination..."
        className="form__education input"
        name="education"
        type="text"
        required
      />

      {/* <label htmlFor="linkedinUrl"></label>
      <input 
      value={inputValues.linkedinUrl} 
      onChange={handleChange} 
      placeholder="https://www.linkedin.com/in/username" 
      className="form__linkedinUrl" 
      name="linkedinUrl" 
      type="text" required/>  */}

      <button className="button-transparent" onClick={handleSkipt}>
        Skip this!
      </button>
      <button className="button" onClick={handleSubmit}>
        Next
      </button>
    </>
  );
}
