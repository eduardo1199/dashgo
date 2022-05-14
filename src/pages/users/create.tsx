import { Flex, Box, Heading, Divider, VStack, SimpleGrid, Button, HStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/SideBar";

export default function UserCreate () {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
          <Divider borderColor="gray.700" my="6" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" w="100%" spacing="8">
              <Input name="nome" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" w="100%" spacing="8">
              <Input name="password" type="password" label="Senha" />
              <Input name="password" type="password" label="Confirmação da senha" />
            </SimpleGrid>
          </VStack>
          <Flex justify="flex-end" mt="8">
            <HStack spacing="4"> 
              <Button colorScheme="whiteAlpha">
                Cancelar
              </Button>
              <Button colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}