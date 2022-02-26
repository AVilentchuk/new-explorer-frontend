import { useKey } from "../../hooks/useKey";
import Register from "../Register/Register";
import Login from "../Login/Login";
import FormDataProvider from "../../context/form-context";

const Popup = ({ isOpen, onClose, popupChangeType }) => {
  useKey("Escape", onClose, isOpen);
  return <></>;
};

export default Popup;
<FormDataProvider>
  <Login
    isOpen={isOpen}
    onClose={onClose}
    popupChangeType={popupChangeType}
  ></Login>

  <Register
    isOpen={isOpen}
    onClose={onClose}
    popupChangeType={popupChangeType}
  ></Register>
</FormDataProvider>;
