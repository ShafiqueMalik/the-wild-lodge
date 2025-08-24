'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormWrapper from '@/shared/components/forms/FormWrapper';
import { AppButton } from '@/shared/components/forms/AppButton';
import InputField from '@/shared/components/forms/InputField';

const schema = z
  .object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export default function SignupForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: any) => {
    console.log('Signup:', values);
  };

  return (
    <FormWrapper
      className="p-8 flex flex-col gap-4 bg-primary-light"
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
      <InputField
        control={form.control}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm your password"
        type="password"
      />
      <AppButton type="submit" className="w-full" size="large">
        Sign Up
      </AppButton>

      <div className="flex justify-end items-center gap-2 text-sm mt-4">
        <span>Already have an account?</span>

        <AppButton variant="linkPrimary" href="/login" className="">
          Login
        </AppButton>
      </div>
    </FormWrapper>
  );
}
