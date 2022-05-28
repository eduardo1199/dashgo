import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../components/Form/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


type SignFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSigIn: SubmitHandler<SignFormData> = async (fields, event) => {
    event.preventDefault();

    console.log(fields);
    console.log(formState);
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    > 
      <Flex
        as="form"
        bg="gray.800"
        w="100%"
        maxWidth={360}
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSigIn)}
      >
        <Stack spacing="4">
          <Input 
            name="email" 
            label="E-mail" 
            type="email"
            error={formState.errors['email']}
            {...register('email')} 
          />
          <Input 
            name="password" 
            label="Senha" 
            type="password" 
            error={formState.errors['password']}
            {...register('password')} 
          />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}
