import { useEffect, useState } from "react";
import { useKey } from "../../hooks/useKey";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useNavigate } from "react-router-dom";

const Popup = ({ isOpen, onClose, popupType, changeState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate;
  useEffect(() => {}, [isOpen, popupType]);
  useKey("Escape", onClose, isOpen);

  const formSubtitle = (
    <p className='form__subtitle'>
      or
      {popupType === "signup" ? (
        <button
          className='form__subtitle-link link'
          onClick={() => changeState("signin")}
        >
          {" "}
          Sign in
        </button>
      ) : (
        <button
          className='form__subtitle-link link'
          onClick={() => changeState("signup")}
        >
          {" "}
          Sign up
        </button>
      )}
    </p>
  );
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      windowId='w-popup'
      formHeader={popupType === "signup" ? "Signup" : "Signin"}
      formName={popupType === "signup" ? "Signup" : "Signin"}
      // onSubmit={popupType === signup ? formSubmitRegister : formSubmitLogin}
      validate={true}
      buttonText={popupType === "signup" ? "Sign up" : "Sign in"}
      subtitle={formSubtitle}
    >
      <label htmlFor='email' className='form__field'>
        Email
        <input
          className='form__input popup__form-input '
          type='email'
          name='email'
          id='email'
          value={email || ""}
          placeholder='Enter email'
          required
          minLength='2'
          maxLength='40'
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className='form__input-error'></span>
      </label>
      <label htmlFor='password' className='form__field'>
        Password
        <input
          className='form__input popup__form-input '
          type='password'
          name='password'
          id='password'
          value={password || ""}
          placeholder='Enter Password'
          required
          minLength='6'
          maxLength='200'
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className='form__input-error'></span>
      </label>
      {popupType === "signup" ? (
        <label htmlFor='username' className='form__field'>
          Username
          <input
            className='form__input popup__form-input '
            type='string'
            name='username'
            id='username'
            value={username || ""}
            placeholder='Enter username'
            required
            minLength='2'
            maxLength='30'
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className='form__input-error'></span>
        </label>
      ) : (
        ""
      )}
    </PopupWithForm>
  );
};

export default Popup;
