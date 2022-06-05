import { Flex, Box, Heading, Divider, VStack, SimpleGrid, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { useMutation } from 'react-query';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/SideBar";

import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string; 
}

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'A senha precisa de no mínimo de 6 caracteres'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

export default function UserCreate () {
  const router = useRouter();

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        create_at: new Date(),
      }
    })

    return response.data.user;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    }
  });
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  });

  const handleSubmitCreateOrder: SubmitHandler<CreateUserFormData> = async (fields, event) => {
    event.preventDefault();

    await createUser.mutateAsync(fields);

    router.push('/users');
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["6","8"]}>
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          as="form"
          onSubmit={handleSubmit(handleSubmitCreateOrder)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
          <Divider borderColor="gray.700" my="6" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" w="100%" spacing={["6","8"]}>
              <Input 
                name="nome" 
                label="Nome completo" 
                {...register('name')}
                error={formState.errors['name']} 
              />
              <Input 
                name="email" 
                type="email" 
                label="E-mail" 
                {...register('email')} 
                error={formState.errors['email']} 
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" w="100%" spacing={["6","8"]}>
              <Input 
                name="password" 
                type="password" 
                label="Senha" 
                {...register('password')}
                error={formState.errors['password']}  
              />
              <Input 
                name="password" 
                type="password" 
                label="Confirmação da senha" 
                {...register('password_confirmation')}
                error={formState.errors['password_confirmation']} 
              />
            </SimpleGrid>
          </VStack>
          <Flex justify="flex-end" mt="8">
            <HStack spacing={["2","4"]}> 
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="pink" type="submit">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}