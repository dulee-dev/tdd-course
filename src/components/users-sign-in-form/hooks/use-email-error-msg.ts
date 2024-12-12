import { checkIsEmail } from '@/libs/email';
import { useEffect, useState } from 'react';

const emailErrorMsg = '올바른 이메일양식을 입력해주세요.';

export const useEmailErrorMsg = (email: string) => {
  const [errorMsg, setErrorMsg] = useState<undefined | string | null>(
    undefined
  );

  useEffect(() => {
    const isEmail = checkIsEmail(email);
    if (email.length === 0) {
      setErrorMsg(undefined);
      return;
    }

    if (!isEmail) {
      setErrorMsg(emailErrorMsg);
      return;
    }

    setErrorMsg(null);
  }, [email]);

  return errorMsg;
};
