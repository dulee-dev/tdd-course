import { useEffect, useState } from 'react';

export const useFormStatus = (emailErrorMsg: string | undefined | null) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (typeof emailErrorMsg === 'string' || emailErrorMsg === undefined) {
      setStatus(false);
      return;
    }

    setStatus(true);
    return;
  }, [emailErrorMsg]);

  return status;
};
