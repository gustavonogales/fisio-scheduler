import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Input } from '@/components';
import { COLOR } from '@/constants';
import { useStore } from '@/stores';

import { ReactComponent as Logo } from '../../assets/logo-vertical.svg';

const signInSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

export function SignIn() {
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const { errors } = formState;
  const signIn = useStore((state) => state.signIn);
  useEffect(() => console.log(errors), [errors]);
  function handleSignIn(formData: any) {
    console.log(formData);
    signIn(formData);
  }

  return (
    <Flex width="100%" height="100vh" align="center" justify="center">
      <Flex
        display={{ xl: 'flex', base: 'none' }}
        height="100%"
        w="100%"
        style={{
          backgroundImage: "url('../../assets/therapist.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      />
      <Flex w="100%" justify="center">
        <Stack align="center" w="300px" gap={2}>
          <Logo width="50%" />
          <Stack
            textAlign="center"
            as="form"
            onSubmit={handleSubmit(handleSignIn)}
            gap={2}
            w="100%"
          >
            <Input
              id="email"
              label="Email"
              type="email"
              register={register}
              errors={errors}
            />
            <Input
              id="password"
              label="Senha"
              type="password"
              register={register}
              errors={errors}
            />
            <Button colorScheme={COLOR.PRIMARY} type="submit">
              Entrar
            </Button>
            <Text>ou</Text>
            <Button>Cadastre-se</Button>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}
