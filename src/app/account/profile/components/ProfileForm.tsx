'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import FormWrapper from '@/shared/components/forms/FormWrapper';
import SelectField from '@/shared/components/forms/SelectField';
import TextareaField from '@/shared/components/forms/TextareaField';
import { AppButton } from '@/shared/components/forms/AppButton';
import DatePicker from '@/shared/components/forms/DatePicker';
import InputField from '@/shared/components/forms/InputField';

// ✅ Validation Schema
const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  address: z.string().min(10, 'Address must be at least 5 characters'),
  cnic: z
    .string()
    .min(13, 'CNIC must be at least 13 characters')
    .max(13, 'CNIC must be at most 13 characters'),
});

export default function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      name: '',
      email: '',
      address: '',
      cnic: '',
    },
  });

  const onSubmit = (values: any) => {
    console.log('Form Values:', values);
  };

  return (
    <FormWrapper
      className=" flex flex-col gap-4 lg:gap-6 bg-primary-light p-6 lg:p-10 mt-5 lg:mt-6"
      form={form}
      onSubmit={onSubmit}
    >
      <InputField
        control={form.control}
        name="name"
        label="Full Name"
        placeholder="Enter your full name"
      />

      <InputField
        control={form.control}
        name="email"
        label="Email Address"
        placeholder="Enter your email"
        type="email"
      />

      <InputField
        control={form.control}
        name="address"
        label="Place of Residence"
        placeholder="Enter your place of residence"
      />
      <InputField control={form.control} name="cnic" label="CNIC" placeholder="Enter your CNIC" />
      {/* Submit */}
      <AppButton variant="primary" type="submit" className="w-full">
        Submit Form
      </AppButton>
    </FormWrapper>
  );
}
