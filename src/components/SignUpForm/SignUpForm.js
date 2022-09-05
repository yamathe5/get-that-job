import React from "react";
import LoginInformationForm from "./LoginInformationForm/LoginInformationForm";
import PersonalInformationForm from "./PersonalInformationForm/PersonalInformationForm";
import CompanyLoginInformationForm from "./CompanyLoginInformationForm";
import CompanyInformationForm from "./CompanyInformationForm";

import ProfessionalInformationForm from "./ProfessionalInformationForm/ProfessionalInformationForm";

import "./SignUpForm.scss";

const INITIAL_DATA = {
  companyName: "",
  companyWebsite: "",
  aboutTheCompany: "",
  companyLogo: "",

  step: 1,
  email: "",
  password: "",
  passwordConfirmation: "",

  name: "",
  phone: "",
  birthdate: "",
  linkedinUrl: "",

  title: "",
  experience: "",
  education: "",
  file: "",
};

function formReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "change_value":
      const { name, value } = action.payload;
      console.log(typeof value, value);
      state = {
        ...state,
        [name]: value,
      };
      return state;
    case "next-step":
      console.log("Antes", state);
      state = {
        ...state,
        step: state.step + 1,
      };
      console.log("Envia", state);
      return state;
    case "initial-state":
      state = INITIAL_DATA;
      return state;
    default:
  }
}

export default function SignUpForm() {
  const [userOrRecluiter, setUserOrRecluiter] = React.useState("user");
  const [inputValues, dispatch] = React.useReducer(formReducer, INITIAL_DATA);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form enviado");
  }

  function handleChangeUserType(item) {
    dispatch("initial-state");
    dispatch({
      type: "initial-state",
      payload: {},
    });
    item === "user"
      ? setUserOrRecluiter("user")
      : setUserOrRecluiter("recruiter");
  }
  function renderUserForm() {
    switch (inputValues.step) {
      case 1:
        return (
          <LoginInformationForm
            inputValues={inputValues}
            dispatch={dispatch}
            formReducer={formReducer}
          />
        );
      case 2:
        return (
          <PersonalInformationForm
            inputValues={inputValues}
            dispatch={dispatch}
            formReducer={formReducer}
          />
        );
      case 3:
        return (
          <ProfessionalInformationForm
            inputValues={inputValues}
            dispatch={dispatch}
            formReducer={formReducer}
          />
        );
      default:
        break;
    }
  }

  function renderCompanyForm() {
    switch (inputValues.step) {
      case 1:
        return (
          <CompanyLoginInformationForm
            inputValues={inputValues}
            dispatch={dispatch}
            formReducer={formReducer}
          />
        );
      case 2:
        return (
          <CompanyInformationForm
            inputValues={inputValues}
            dispatch={dispatch}
            formReducer={formReducer}
          />
        );
      default:
        break;
    }
  }

  return (
    <div>
      <div className="login-container">
        <h2 className="headline-3">Good choice!</h2>
        <p className="headline-6">Create a new account as...</p>
        <div className="login-container__buttons">
          <button
            className={userOrRecluiter === "user" ? "active" : "inactive"}
            // disabled={userOrRecluiter === "user"}
            onClick={() => handleChangeUserType("user")}
          >
            Professional
          </button>
          <button
            className={userOrRecluiter === "recruiter" ? "active" : "inactive"}
            // disabled={userOrRecluiter === "recruiter"}
            onClick={() => handleChangeUserType("recruiter")}
          >
            Recruiter
          </button>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          {userOrRecluiter === "user" ? renderUserForm() : renderCompanyForm()}
        </form>
      </div>
    </div>
  );
}
