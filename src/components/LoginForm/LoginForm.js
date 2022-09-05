import React from "react";

import "./login-form.scss";

const INITIAL_DATA = {
  email: "",
  password: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "change_value":
      const { name, value } = action.payload;
      state = {
        ...state,
        [name]: value,
      };
      return state;
    default:
      return state;
  }
}

export default function LoginForm() {
  const [userOrRecluiter, setUserOrRecluiter] = React.useState(true);
  const [inputValues, dispatch] = React.useReducer(formReducer, INITIAL_DATA);
  console.log(inputValues);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form enviado");
  }

  function handleChangeUserType(item) {
    item === "user" ? setUserOrRecluiter(true) : setUserOrRecluiter(false);
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
    <div>
      <h2 className="headline-3">Welcome back</h2>
      <p className="headline-6">Login to you account as...</p>
      <div>
        <button
          className="button-font"
          disabled={userOrRecluiter}
          onClick={() => handleChangeUserType("user")}
        >
          Professional
        </button>
        <button
          className="button-font"
          disabled={!userOrRecluiter}
          onClick={() => handleChangeUserType("recuiter")}
        >
          Recruiter
        </button>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label overline" htmlFor="email">
          EMAIL
        </label>
        <input
          //pattern="[0-9]{8}"
          value={inputValues.email}
          // maxLength={8}
          onChange={handleChange}
          placeholder="email"
          className="form__email input"
          id="email"
          name="email"
          type="text"
          required
        />

        <label className="form__label overline" htmlFor="password">
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
          id="password"
          type="password"
          required
        />

        <button className="button" onClick={handleSubmit}>
          Log in
        </button>
      </form>
    </div>
  );
}
