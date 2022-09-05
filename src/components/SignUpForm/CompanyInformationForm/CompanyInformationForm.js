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
      <label className="form__label" htmlFor="companyWebsite">
        Company Website
      </label>
      <input
        //pattern="[0-9]{8}"
        value={inputValues.companyWebsite}
        // maxLength={8}
        onChange={handleChange}
        placeholder="https://www.mycompany.sa"
        className="form__name input"
        name="companyWebsite"
        type="text"
        required
      />

      <label className="form__label" htmlFor="aboutTheCompany">
        EMAIL
      </label>
      <input
        //pattern="[0-9]{8}"
        value={inputValues.aboutTheCompany}
        // maxLength={8}
        onChange={handleChange}
        placeholder="https://www.mycompany.sa"
        className="form__name input"
        name="aboutTheCompany"
        type="text"
        required
      />

      <button className="button-transparent" onClick={handleSkip}>
        SKIP THIS
      </button>
      <button className="button" onClick={handleSkip}>
        LOG IN
      </button>
    </>
  );
}
