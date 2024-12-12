'use client';
import clsx from 'clsx';
import s from './styles.module.css';
import { useInputText } from '@/hooks/use-input-text';
import { useEmailErrorMsg } from './hooks/use-email-error-msg';

interface Props {
  className?: string;
}

export const UsersSignInForm = (props: Props) => {
  const { value: email, onChange: onChangeEmail } = useInputText('');
  const emailErrorMsg = useEmailErrorMsg(email);
  const { value: password, onChange: onChangePassword } = useInputText('');

  return (
    <form className={clsx(s.form, props.className)}>
      <div className={s.emailField}>
        <div className={s.labelBox}>
          <label className={s.label} htmlFor="email">
            이메일
          </label>
        </div>
        <input
          className={s.input}
          type="text"
          id="email"
          value={email}
          onChange={onChangeEmail}
        />
        <div className={s.emailErrorMsg}>
          {emailErrorMsg !== undefined ? (
            <span>{emailErrorMsg}</span>
          ) : (
            <span>&nbsp;</span>
          )}
        </div>
      </div>
      <div>
        <div className={s.labelBox}>
          <label className={s.label} htmlFor="password">
            비밀번호
          </label>
        </div>
        <input
          className={s.input}
          id="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <button className={s.submit} type="button" disabled={false}>
        로그인
      </button>
    </form>
  );
};
