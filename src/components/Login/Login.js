import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useContext } from "react";
import { FormContext } from "../../context/form-context";
import { authorize, register } from "../../utils/auth";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

const Login = ({ isOpen, onClose, openOtherPopup, handleLogin }) => {
  const {
    email: [email, setEmail],
    password: [password, setPassword],
    username: [username, setUsername],
  } = useContext(FormContext);

  const handleSubmit = () => {
    return authorize(email, password).then((data) => {
      if (data.token) {
        handleLogin();
      }
    });
  };
  const emptyClose = () => {
    setEmail("");
    setPassword("");
    setUsername("");
    onClose();
  };
  const loginSubtitle = (
    <p className='form__subtitle'>
      {" "}
      or
      <button
        className='form__subtitle-link link'
        onClick={() => openOtherPopup()}
      >
        Sign up
      </button>
    </p>
  );

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={emptyClose}
      windowId='w-popup'
      formHeader={"Signin"}
      formName={"Signin"}
      onSubmit={handleSubmit}
      validate={true}
      buttonText={"Sign in"}
      subtitle={loginSubtitle}
      successMessage={"Logged In Successfully!"}
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
          onChange={(e) => {
            setEmail(e.target.value);
          }}
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
    </PopupWithForm>
  );
};

export default Login;
