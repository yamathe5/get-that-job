import React from "react";

// const INITIAL_DATA = {
//   name: "",
//   phone: "",
//   birthdate: "",
//   linkedinUrl:"",

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

export default function PersonalInformationForm({ inputValues, dispatch }) {
  // const [ inputValues, dispatch ] = React.useReducer(formReducer, INITIAL_DATA)

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form enviado");
    dispatch({
      type: "next-step",
    });
  }

  function handleSkipt(e) {
    e.preventDefault();
    console.log("Skipt");
    dispatch({
      type: "next-step",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    // console.log(e.target.value)
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
      <label className="form__label" htmlFor="name">
        NAME
      </label>
      <input
        value={inputValues.name}
        onChange={handleChange}
        placeholder="John Doe"
        className="form__name input"
        name="name"
        type="text"
        required
      />

      <label className="form__label" htmlFor="phone">
        PHONE
      </label>
      <input
        value={inputValues.phone}
        onChange={handleChange}
        placeholder="+XXXXXXXXX"
        className="form__phone input"
        name="phone"
        type="tel"
      />

      <label className="form__label" htmlFor="birthdate">
        BIRTHDATE
      </label>
      <input
        value={inputValues.birthdate}
        onChange={handleChange}
        placeholder="Pick a date"
        className="form__date input"
        name="birthdate"
        type="date"
        required
      />

      <label className="form__label" htmlFor="linkedinUrl">
        LINKEDIN URL
      </label>
      <input
        value={inputValues.linkedinUrl}
        onChange={handleChange}
        placeholder="https://www.linkedin.com/in/username"
        className="form__linkedinUrl input"
        name="linkedinUrl"
        type="text"
        required
      />

      <button className="button-transparent" onClick={handleSkipt}>
        Skip this!
      </button>
      <button className="button" onClick={handleSubmit}>
        Next
      </button>
    </>
  );
}
