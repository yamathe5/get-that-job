import React from "react";

export default function CompanyLoginInformationForm({ inputValues, dispatch }) {
  function handleSkip() {
    dispatch({
      type: "next-step",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        name: name,
        value: value,
      },
    });
  }
  return (
    <>
      <label className="form__label" htmlFor="companyName">
        EMAIL
      </label>
      <input
        //pattern="[0-9]{8}"
        value={inputValues.companyName}
        // maxLength={8}
        onChange={handleChange}
        placeholder="My Company S.A"
        className="form__name input"
        name="companyName"
        type="text"
        required
      />

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
