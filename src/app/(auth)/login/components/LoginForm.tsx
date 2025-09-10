'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormWrapper from '@/shared/components/forms/FormWrapper';
import { AppButton } from '@/shared/components/forms/AppButton';
import InputField from '@/shared/components/forms/InputField';
import PageTitle from '@/shared/components/typography/PageTitle';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const schema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export default function LoginForm() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: any) => {
    try {
      const res = await signIn('credentials', {
        email: values.email,
        password: values.password,
        // redirect: true,
        redirect: false,
        callbackUrl: '/', // where to go after login
      });
      if (res?.error) {
        // Show proper error message
        console.error('Login failed:', res.error);
      } else {
        // Redirect manually
        router.push(res?.url || '/');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <FormWrapper
      className="p-8 flex flex-col gap-4 bg-primary-light w-full max-w-[600px] mx-auto"
      form={form}
      onSubmit={onSubmit}
    >
      <InputField
        control={form.control}
        name="email"
        label="Email"
        placeholder="Enter your email"
        type="email"
      />
      <InputField
        control={form.control}
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
      <AppButton type="submit" className="w-full" size="large">
        Login
      </AppButton>

      <div className="flex justify-end items-center gap-2 text-sm mt-4">
        <span>Dont have an account</span>

        <AppButton variant="linkPrimary" href="/signup" className="">
          Sign Up
        </AppButton>
      </div>
    </FormWrapper>
  );
}
