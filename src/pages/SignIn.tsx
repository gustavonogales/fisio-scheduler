import { Button, Flex, Stack, Text, useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Input } from '@/components';
import { COLOR } from '@/constants';
import { useSignIn } from '@/hooks/useSignIn';
import { useStore } from '@/stores';

import { ReactComponent as Logo } from '../../assets/logo-vertical.svg';

const signInSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

export function SignIn() {
  const toast = useToast();
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const { errors } = formState;
  const [{ loading, error }, execute] = useSignIn();
  const save = useStore((state) => state.save);

  function handleSignIn(formData: any) {
    execute({ data: formData })
      .then((response) => {
        save(response.data);
      })
      .catch(() => {
        toast({
          title: 'Ocorreu um erro na autenticação',
          description: 'Tente novamente',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
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
            <Button isLoading={loading} colorScheme={COLOR.PRIMARY} type="submit">
              Entrar
            </Button>
            <Text>ou</Text>
            <Button isDisabled={loading}>Cadastre-se</Button>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}
