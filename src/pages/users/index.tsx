import { Flex, Box, Heading, Button, Icon, Table, Thead, Tr, Td, Th, Checkbox, Tbody, Text, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/SideBar";

import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Pagination } from "../../components/Pagination";
import NextLink from "next/link";
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";

type User = {
  id: string;
  name: string;
  email: string;
  createAt: string;
}
interface UsersListProps {
  users: User[],
  totalCount: number;
}

export default function UsersList (props: UsersListProps) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`);

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10, //10min
    });
  }

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
            <Heading size="lg" fontWeight="normal">
              Usuários
              { !isLoading && isFetching && <Spinner ml="4" color="gray.500" size="sm" />}
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                Criar Novo
              </Button>
            </NextLink>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px={["4", "4" ,"6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink" /> 
                  </Th>
                  <Th>
                    Usuário
                  </Th>
                  {isWideVersion && (
                    <Th>
                      Data de Cadastro
                    </Th>
                  )}
                  <Th width="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.users.map(user => {
                  return (
                    <Tr key={user.id}>
                      <Td px={["4", "4" ,"6"]}>
                        <Checkbox colorScheme="pink" /> 
                      </Td>
                      <Td>
                        <Box>
                          <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                            <Text fontWeight="bold">{user.name}</Text>
                          </Link>
                          <Text fontSize="sm" color="gray.300">{user.email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && (
                        <Td>
                          {user.createAt}
                        </Td>
                      )}
                      <Td>
                        <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} />}>
                          Editar
                        </Button>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
              </Table>

              <Pagination 
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
          
        </Box>
      </Flex>
    </Box>
  )
};

export const getServerSideProps: GetServerSideProps = async ()  => {
  //const { users, totalCount } = await getUsers(1);

  return {
    props: {
     /*  users,
      totalCount */
    }
  }
}