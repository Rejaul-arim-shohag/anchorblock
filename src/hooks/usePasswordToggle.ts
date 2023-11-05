import { useState, MouseEventHandler } from 'react';

type UsePasswordToggleReturnType = [boolean, MouseEventHandler<HTMLButtonElement>];

const usePasswordToggle = (): UsePasswordToggleReturnType => {
  const [visible, setVisible] = useState(false);

  const togglePassword: MouseEventHandler<HTMLButtonElement> = (event) => {
    
    event.preventDefault();
    setVisible(!visible);
    debugger
  };

  return [visible, togglePassword];
};

export default usePasswordToggle;