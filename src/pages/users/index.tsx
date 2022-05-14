import { Flex, Box, Heading, Button, Icon, Table, Thead, Tr, Td, Th, Checkbox, Tbody, Text } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/SideBar";

import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Pagination } from "../../components/Pagination";

export default function UsersList () {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex
            mb="8"
            justify="space-between"
            align="center"
          >
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
              Criar Novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" /> 
                </Th>
                <Th>
                  Usuário
                </Th>
                <Th>
                  Data de Cadastro
                </Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" /> 
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Eduardo Soares</Text>
                    <Text fontSize="sm" color="gray.300">Eduardosooares456@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  17 de abril, 2021
                </Td>
                <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} />}>
                     Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" /> 
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Eduardo Soares</Text>
                    <Text fontSize="sm" color="gray.300">Eduardosooares456@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  17 de abril, 2021
                </Td>
                <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} />}>
                     Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" /> 
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Eduardo Soares</Text>
                    <Text fontSize="sm" color="gray.300">Eduardosooares456@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  17 de abril, 2021
                </Td>
                <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} />}>
                     Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}