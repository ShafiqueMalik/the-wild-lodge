import PageTitle from '@/shared/components/typography/PageTitle';
import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <div className="max-w-[600px] w-full mx-auto p-4">
      <PageTitle className=" mb-5"> Login </PageTitle>
      <LoginForm />
    </div>
  );
}
