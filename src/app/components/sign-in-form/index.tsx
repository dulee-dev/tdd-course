'use client';
import clsx from 'clsx';
import s from './styles.module.css';

interface Props {
  className?: string;
}

export const SignInForm = (props: Props) => {
  return (
    <form className={clsx(s.form, props.className)}>
      <div className={s.field}>
        <div className={s.labelBox}>
          <label className={s.label} htmlFor="email">
            이메일
          </label>
        </div>
        <input
          className={s.input}
          type="text"
          name="email"
          placeholder="email@test.com"
        />
        <div className={s.errorMsg}>
          {true ? (
            <span>이메일 양식을 확인해주세요.</span>
          ) : (
            <span>&nbsp;</span>
          )}
        </div>
      </div>
      <div>
        <div>
          <label className={s.label} htmlFor="password">
            비밀번호
          </label>
        </div>
        <input className={s.input} type="password" name="password" />
      </div>
      <button className={clsx(s.submit, true && s.enabled)} type="button">
        로그인
      </button>
    </form>
  );
};
