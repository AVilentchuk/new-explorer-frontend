import { useEffect, useState } from "react";
import { useKey } from "../../hooks/useKey";
const InfoTooltip = ({
  onClose,
  isOpen,
  id,
  status,
  statusMessage,
  noClose,
}) => {
  const spinner = (
    <svg className='tooltip_spinner'>
      <circle cx='60' cy='60' r='54' />
    </svg>
  );
  const [toolTipMessage, setToolTipMessage] = useState(statusMessage);

  const handleTooltipImage = () => {
    if (status) return "tooltip_success";
    if (status === false) return "tooltip_failure";
  };
  useEffect(() => {
    if (status === null) setToolTipMessage(statusMessage);
    if (status) {
      setToolTipMessage(` ${statusMessage}Registration successfully completed!`);
    } else if (status === false) {
      setToolTipMessage(
        `Oops, something went wrong! Please try again.  \n Error: ${statusMessage}.`
      );
    }
  }, [statusMessage, status]);

  useKey("Escape", onClose, isOpen);

  return (
    <div className={`popup ${isOpen ? "popup_active" : ""} `} onClick={onClose}>
      <div
        className='popup__window'
        id={id}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {noClose ? (
          " "
        ) : (
          <button
            className='button button_type_close'
            type='button'
            aria-label='Close window'
            onClick={onClose}
          ></button>
        )}
        <div className={`tooltip ${handleTooltipImage()} `}>
          {status === null && spinner}
        </div>
        <h2 className='popup__title popup__title_tooltip'>{toolTipMessage}</h2>
        {<a className="popup__subtitle">Sign in</a>}
      </div>
    </div>
  );
};

export default InfoTooltip;
