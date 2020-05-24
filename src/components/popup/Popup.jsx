import { useToasts } from 'react-toast-notifications';
const { addToast } = useToasts();
export const successPopup = (message) => {
  addToast(message, {
    appearance: 'success',
    transitionDuration: 0,
    autoDismissTimeout: 2000,
    autoDismiss: true,
  });
};

export const errorPopup = (message) => {
  addToast(message, {
    appearance: 'error',
    transitionDuration: 0,
    autoDismissTimeout: 2000,
    autoDismiss: true,
  });
};

export const warnPopup = (message) => {
  addToast(message, {
    appearance: 'warning',
    transitionDuration: 0,
    autoDismissTimeout: 2000,
    autoDismiss: true,
  });
};
