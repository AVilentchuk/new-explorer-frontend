import { useContext, useEffect, useState } from "react";
import { useKey } from "../hooks/useKey";
import PopupWithForm from "./PopupWithForm";
import { useNavigate } from "react-router-dom";

const SigninPopup = ({ isOpen, onClose, updateCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate;
  useEffect(() => {}, [isOpen]);

  const formSubmit = () => {
    return updateCurrentUser({ email, password });
  };

  useKey("Escape", onClose, isOpen);
  const formSubtitle = (
    <p className='form__subtitle'>
      or{" "}
      <a
        className='form__subtitle-link link'
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sign up
      </a>
    </p>
  );
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      windowId='w-singin'
      formHeader='Signin'
      formName='Signin'
      onSubmit={formSubmit}
      validate={false}
      buttonText='Sign up'
      subtitle={formSubtitle}
    >
      <label htmlFor='email' className='form__field'>
        Email
        <input
          className='form__input popup__form-input '
          typeof='email'
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
          typeof='password'
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
    </PopupWithForm>
  );
};

export default SigninPopup;
