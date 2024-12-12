import { checkIsEmail } from '@/libs/email';
import { useEffect, useState } from 'react';

const emailErrorMsg = '올바른 이메일양식을 입력해주세요.';

export const useEmailErrorMsg = (email: string) => {
  const [errorMsg, setErrorMsg] = useState<undefined | string>(undefined);

  useEffect(() => {
    const isEmail = checkIsEmail(email);
    if (isEmail || email.length === 0) {
      setErrorMsg(undefined);
      return;
    }

    setErrorMsg(emailErrorMsg);
  }, [email]);

  return errorMsg;
};
