'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormWrapper from '@/shared/components/forms/FormWrapper';
import SelectField from '@/shared/components/forms/SelectField';
import TextareaField from '@/shared/components/forms/TextareaField';
import { AppButton } from '@/shared/components/forms/AppButton';
import { useForm } from 'react-hook-form';

const schema = z.object({
  numberOfGuests: z.string().min(1, 'Please select number of guests'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
});

export default function UpdateReservationForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      numberOfGuests: '',
      description: '',
    },
  });

  const onSubmit = (values: any) => {
    console.log('Update Reservation:', values);
  };

  return (
    <FormWrapper
      className="p-8 flex flex-col gap-4 bg-primary-light"
      form={form}
      onSubmit={onSubmit}
    >
      <SelectField
        control={form.control}
        name="numberOfGuests"
        label="Number of Guests"
        placeholder="Select number of guests"
        options={[
          { label: '1 Guest', value: '1' },
          { label: '2 Guests', value: '2' },
          { label: '3 Guests', value: '3' },
          { label: '4 Guests', value: '4' },
          { label: '5 Guests', value: '5' },
        ]}
      />
      <TextareaField
        control={form.control}
        name="description"
        label="Description"
        placeholder="Write something about your reservation..."
      />
      <AppButton type="submit" className="w-full">
        Update Reservation
      </AppButton>
    </FormWrapper>
  );
}
