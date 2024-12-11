import { SignInForm } from '@/app/components/sign-in-form';
import s from './styles.module.css';

export default function SignIn() {
  return (
    <div>
      <SignInForm className={s.form} />
    </div>
  );
}
