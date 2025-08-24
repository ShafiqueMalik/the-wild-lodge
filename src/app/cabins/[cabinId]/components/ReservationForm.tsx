'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import FormWrapper from '@/shared/components/forms/FormWrapper';
import SelectField from '@/shared/components/forms/SelectField';
import TextareaField from '@/shared/components/forms/TextareaField';
import { AppButton } from '@/shared/components/forms/AppButton';
import DatePicker from '@/shared/components/forms/DatePicker';

// ✅ Validation Schema
const schema = z
  .object({
    fromDate: z
      .date()
      .nullable()
      .refine((val) => !!val, {
        message: 'From Date is required',
      }),
    endDate: z
      .date()
      .nullable()
      .refine((val) => !!val, {
        message: 'End Date is required',
      }),
    numberOfGuests: z.string().min(1, 'Please select a country'),
    description: z.string().min(10, 'Bio must be at least 10 characters'),
  })
  .refine(
    (data) => {
      console.log('Validating date range:', data);
      if (!data.fromDate || !data.endDate) return false;
      // Ensure endDate is after fromDate
      if (data.endDate < data.fromDate) return false;
      // Ensure range is not more than 1 month
      const diffInMs = data.endDate.getTime() - data.fromDate.getTime();
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
      return diffInDays <= 31;
    },
    {
      message: 'Date range must not exceed 1 month and End Date must be after From Date',
      path: ['endDate'],
    }
  );

export default function ReservationForm() {
  const form = useForm({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      numberOfGuests: '',
      description: '',
    },
  });

  const onSubmit = (values: any) => {
    console.log('Form Values:', values);
  };

  return (
    <FormWrapper className="p-10 flex flex-col gap-4 lg:gap-6" form={form} onSubmit={onSubmit}>
      {/* Date Pickers Side by Side */}
      <div className="flex gap-4">
        <DatePicker
          control={form.control}
          name="fromDate"
          label="From Date"
          placeholder="Select start date"
        />
        <DatePicker
          control={form.control}
          name="endDate"
          label="End Date"
          placeholder="Select end date"
        />
      </div>

      {/* Country Select */}
      <SelectField
        control={form.control}
        name="numberOfGuests"
        label="Number of Guests"
        placeholder="Select number of guests"
        options={[
          { label: '1 Guest', value: '1' },
          { label: '2 Geusts', value: '2' },
          { label: '3 Guests', value: '3' },
          { label: '4 Guests', value: '4' },
          { label: '5 Guests', value: '5' },
        ]}
      />
      {/* Bio */}
      <TextareaField
        control={form.control}
        name="description"
        label="Description"
        placeholder="Write something about yourself..."
      />
      {/* Submit */}
      <AppButton type="submit" className="w-full">
        Submit Form
      </AppButton>
    </FormWrapper>
  );
}
