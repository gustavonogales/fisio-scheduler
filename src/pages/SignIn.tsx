import { Button, Flex, FormControl, FormLabel, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '@/components';
import { useStore } from '@/stores';

export function SignIn() {
  const { handleSubmit, control } = useForm();
  // const { signIn } = useStore((state) => state.signIn);

  return (
    <Flex width="100%" height="100vh" align="center" justify="center">
      <Stack textAlign="center" maxW="300px" w="100%">
        <Text fontSize="xl">Bem vindo</Text>
        <form onSubmit={handleSubmit()}>
          <Input id="email" label="Email" type="email" control={control} />
          <Input id="password" label="Senha" type="password" control={control} />
          <Button colorScheme="teal">Entrar</Button>
          <Text>ou</Text>
          <Button>Cadastre-se</Button>
        </form>
      </Stack>
    </Flex>
  );
}
