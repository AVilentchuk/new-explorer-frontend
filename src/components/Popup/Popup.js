import { useEffect, useState } from "react";
import { useKey } from "../../hooks/useKey";

import { useNavigate } from "react-router-dom";
import { authorize, register } from "../../utils/auth";
import Register from "../Register/Register";
import Login from "../Login/Login";
import FormDataProvider from "../../context/form-context";

const Popup = ({
  isOpen,
  onClose,
  popupType,
  changeState,
  popupChangeType,
  openTooltip,
}) => {
  const navigate = useNavigate;
  useKey("Escape", onClose, isOpen);

  return (
    <>
      <FormDataProvider>
        <Login
          isOpen={(popupType === "signin" && isOpen)}
          onClose={onClose}
          popupChangeType={popupChangeType}
        ></Login>

        <Register
          isOpen={(popupType === "signup" && isOpen)}
          onClose={onClose}
          popupChangeType={popupChangeType}
        ></Register>
      </FormDataProvider>
    </>
  );
};

export default Popup;
