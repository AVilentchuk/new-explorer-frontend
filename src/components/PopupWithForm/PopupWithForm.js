import { useEffect, useRef, useState } from "react";
import FormValidator from "../../utils/FormValidator";
import { loader } from "../../utils/loader.js";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

const PopupWithForm = ({
  children,
  formName,
  formHeader,
  onClose,
  id,
  isOpen,
  onSubmit,
  validate,
  buttonText,
  subtitle,
  tooltipCaption,
  noClose,
  successMessage,
}) => {
  const [form, setForm] = useState();
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState(formHeader);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const formRef = useRef();
  const buttonRef = useRef();

  const errorHandle = async (err) => {
    if (err) {
      const parsedError = await err.json();
      setStatusMessage(parsedError.message || parsedError.error);
      setStatus(false);
    }
  };

  useEffect(() => {
    if (validate) {
      const validatedForm = new FormValidator(formRef.current);
      validatedForm.enableValidation();
      setForm(validatedForm);
    } else {
      formRef.current.style.margin = "0 auto";
    }
  }, [validate, formName]);

  useEffect(() => {
    if (form && isOpen) form.resetValidation();
  }, [isOpen, form]);

  useEffect(() => {
    setTimeout(() => {
      setStatusMessage(formHeader);
      setStatus(null);
    }, 300);
  }, [isTooltipOpen]);
  return (
    <>
      <div
        className={`popup  ${isOpen ? "popup_active" : ""}`}
        onClick={onClose}
      >
        <div
          className='popup__window'
          id={id}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <button
            className='button button_type_close'
            type='button'
            aria-label='Close window'
            onClick={onClose}
          ></button>
          <h2 className='popup__title'>{formHeader}</h2>
          <form
            className='form popup__form'
            ref={formRef}
            name={`${formName}`}
            onSubmit={(e) => {
              e.preventDefault();

              loader({
                dots: {
                  interval: 75,
                  count: 4,
                },
                completeTimeDelay: 400,
                buttonSelector: buttonRef.current,
                clickHandler: () => {
                  setIsTooltipOpen(true);
                  return onSubmit();
                },
                element: status,
                onError: (error) => {
                  errorHandle(error);
                  setIsTooltipOpen(true);
                },
                onSuccess: () => {
                  !noClose && setIsTooltipOpen(false);
                  !noClose && onClose();
                  setStatusMessage(successMessage);
                  setStatus(true);
                },
              });
            }}
          >
            {children}
            <button
              className='button button_type_submit'
              type='submit'
              ref={buttonRef}
            >
              {buttonText}
            </button>
          </form>
          {subtitle && subtitle}
        </div>
      </div>

      <InfoTooltip
        onClose={() => setIsTooltipOpen(false)}
        isOpen={isTooltipOpen}
        status={status}
        statusMessage={statusMessage}
        stopPropagation={true}
        caption={tooltipCaption}
      />
    </>
  );
};

export default PopupWithForm;
