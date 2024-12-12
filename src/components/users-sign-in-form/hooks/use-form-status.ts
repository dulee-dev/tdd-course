import { useEffect, useState } from 'react';

export const useFormStatus = (emailErrorMsg: string | undefined | null) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const isEmailError = typeof emailErrorMsg === 'string';
    const isEmailIdle = emailErrorMsg === undefined;
    if (isEmailError || isEmailIdle) {
      setStatus(false);
      return;
    }

    setStatus(true);
    return;
  }, [emailErrorMsg]);

  return status;
};
