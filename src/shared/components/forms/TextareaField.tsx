// components/forms/TextareaField.tsx
'use client';

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Control } from 'react-hook-form';

interface TextareaFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
}

export default function TextareaField({ control, name, label, placeholder }: TextareaFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className=" text-paragraph">{label}</FormLabel>
          <FormControl>
            <Textarea className="border-white/40" placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
