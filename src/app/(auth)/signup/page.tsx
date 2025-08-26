import PageTitle from '@/shared/components/typography/PageTitle';
import SignupForm from './components/SignupForm';

export const metadata = {
  title: 'Sign Up',
};
export default function SignupPage() {
  return (
    <div className="max-w-[600px] w-full mx-auto p-4">
      <PageTitle className=" mb-5"> Sign Up </PageTitle>
      <SignupForm />
    </div>
  );
}
