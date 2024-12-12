import { UsersSignInForm } from '@/components/users-sign-in-form';
import s from './styles.module.css';

export default function SignIn() {
  return (
    <div>
      <UsersSignInForm className={s.form} />
    </div>
  );
}
