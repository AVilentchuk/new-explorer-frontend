import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useContext } from "react";
import { FormContext } from "../../context/form-context";
import { register } from "../../utils/auth";

const Register = ({ isOpen, onClose, openOtherPopup }) => {
  const {
    email: [email, setEmail],
    password: [password, setPassword],
    username: [username, setUsername],
  } = useContext(FormContext);

  const emptyClose = () => {
    setEmail("");
    setPassword("");
    setUsername("");
    onClose();
  };

  const registerSubtitle = (
    <p className='form__subtitle'>
      or
      <button
        className='form__subtitle-link link'
        onClick={() => {
          openOtherPopup();
        }}
      >
        Sign in
      </button>
    </p>
  );

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={emptyClose}
      windowId='w-popup'
      formHeader={"Signup"}
      formName={"Signup"}
      onSubmit={() => {
        return register(email, password, username);
      }}
      validate={true}
      buttonText={"Sign up"}
      subtitle={registerSubtitle}
      tooltipCaption={
        <a className='popup__subtitle' onClick={openOtherPopup}>
          Sign in
        </a>
      }
      noClose={true}
      successMessage={"Registration successfully completed!"}
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
    </PopupWithForm>
  );
};

export default Register;
