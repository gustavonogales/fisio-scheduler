import { FormControl, FormLabel, Input as ChakraInput } from '@chakra-ui/react';
import React from 'react';
import { Control, useController } from 'react-hook-form';

interface InputProps {
  id: string;
  label: string;
  control: Control;
  type?: React.HTMLInputTypeAttribute;
}

export function Input({ id, label, control, type = 'text' }: InputProps) {
  const {
    field: { onChange, value },
  } = useController({
    name: id,
    control,
  });

  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <ChakraInput id={id} type={type} />
    </FormControl>
  );
}
