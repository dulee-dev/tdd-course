import clsx from 'clsx';
import s from './styles.module.css';

interface Props {
  className?: string;
}

export const UsersSignInForm = (props: Props) => {
  return (
    <form className={clsx(s.form, props.className)}>
      <div className={s.emailField}>
        <div className={s.labelBox}>
          <label className={s.label} htmlFor="email">
            이메일
          </label>
        </div>
        <input className={s.input} type="text" id="email" />
        <div className={s.emailErrorMsg}>
          {false ? (
            <span>올바른 이메일양식을 입력해주세요.</span>
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
        <input className={s.input} id="password" type="password" />
      </div>
      <button className={s.submit} type="button" disabled={false}>
        로그인
      </button>
    </form>
  );
};
