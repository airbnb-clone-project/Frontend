import { createPortal } from 'react-dom';

const LoginModal = () => {
  return createPortal(<div></div>, document.body);
};

export default LoginModal;
