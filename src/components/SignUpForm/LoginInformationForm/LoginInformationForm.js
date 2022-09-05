import React from "react";

export default function LoginInformationForm({ inputValues, dispatch }) {
  // const [ inputValues, dispatch ] = React.useReducer(formReducer, INITIAL_DATA)

  // function handleSubmit(e){
  //   e.preventDefault()
  //   console.log("Form enviado")
  //   dispatch({
  //     type: "next-step",
  //   })
  // }

  function handleSkip() {
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
      <label className="form__label" htmlFor="email">
        EMAIL
      </label>
      <input
        //pattern="[0-9]{8}"
        value={inputValues.email}
        // maxLength={8}
        onChange={handleChange}
        placeholder="email"
        className="form__email input"
        name="email"
        type="text"
        required
      />

      <label className="form__label" htmlFor="password">
        PASSWORD
      </label>
      <input
        // pattern="[0-9]{8}"
        value={inputValues.password}
        // maxLength={8}
        onChange={handleChange}
        placeholder="*******"
        className="form__password input"
        name="password"
        type="password"
        required
      />

      <label className="form__label" htmlFor="passwordConfirmation">
        PASSWORD CONFIRMATION
      </label>
      <input
        // pattern="[0-9]{8}"
        value={inputValues.passwordConfirmation}
        // maxLength={8}
        onChange={handleChange}
        placeholder="*******"
        className="form__password input"
        name="passwordConfirmation"
        type="password"
        required
      />

      <button className="button" onClick={handleSkip}>
        LOG IN
      </button>
    </>
  );
}
