import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
} from '@chakra-ui/react';
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errors: any;
  type?: React.HTMLInputTypeAttribute;
}

export function Input({ id, label, register, errors, type = 'text' }: InputProps) {
  const error = errors?.[id]?.message;
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <ChakraInput id={id} type={type} {...register(id)} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}
