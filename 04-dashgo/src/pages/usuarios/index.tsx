import { Box, Button, Text, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, IconButton, Spinner, Link } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Layout } from "../../components/Layout";
import { Pagination } from "../../components/Pagination";
import { usePagination } from "../../contexts/PaginationContext";
import { useUsers } from "../../hooks/useUsers";
import { api } from "../../services/axios";
import { queryClient } from "../../services/react-query";

export default function UserList() {
    const {page} = usePagination()
    const perPage = 6
    const { isLoading, isFetching, data, error } = useUsers(page, perPage)

    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    })

    const handlePrefetch = async (id: number) => {
        await queryClient.prefetchQuery(
            ["user", id], 
            async () => {
                const response = await api.get(`users/${id}`)

                return response.data
            },
            { staleTime: 600000 } // 10 minutes
        )
    }

    return (
        <>
            <Head>
                <title>Lista de usuários | Dashgo</title>
            </Head>
            <Layout>
                <Box
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p="8"
                    overflowX="auto"
                >
                    <Flex
                        mb="8"
                        justify="space-between"
                        align={isWideScreen ? "center" : "left"}
                        direction={isWideScreen ? "row" : "column"}
                    >
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            { !isLoading && isFetching && <Spinner ml="3" color="gray.500" /> }
                        </Heading>
                        <NextLink href="/usuarios/criar" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                cursor="pointer"
                                colorScheme="pink"
                                maxW={110}
                                mt={isWideScreen ? "" : "2"}
                                leftIcon={<Icon as={RiAddLine} />}
                            >
                                Criar novo
                            </Button>
                        </NextLink>
                    </Flex>
                    
                    <Table colorScheme="whiteAlpha" variant="striped">
                        {isLoading ? (
                            <Flex justify="center">
                                <Spinner size="xl" thickness="4px" mt="6" />
                            </Flex>
                        ) : error ? (
                            <Flex justify="center">
                                <Text>
                                    Ocorreu um erro ao carregar as informações
                                    de usuários.
                                </Text>
                            </Flex>
                        ) : (
                            <>
                                <Thead>
                                    <Tr>
                                        <Th px="6" color="gray.300">
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>Usuário</Th>
                                        {isWideScreen && (
                                            <Th>Data de cadastro</Th>
                                        )}
                                        <Th w="8"></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {
                                        data.users.map((user) => {
                                            return (
                                                <Tr key={user.id}>
                                                    <Td px="6">
                                                        <Checkbox colorScheme="pink" />
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <Link color="purple.400" onMouseEnter={() => handlePrefetch(user.id)}>
                                                                <Text fontWeight="bold">
                                                                    {user.name}
                                                                </Text>
                                                            </Link>
                                                            <Text
                                                                fontSize="sm"
                                                                color="gray.300"
                                                            >
                                                                {user.email}
                                                            </Text>
                                                        </Box>
                                                    </Td>
                                                    {isWideScreen && (
                                                        <Td>{user.createdAt}</Td>
                                                    )}
                                                    <Td>
                                                        {isWideScreen ? (
                                                            <Button
                                                                as="a"
                                                                size="sm"
                                                                fontSize="sm"
                                                                cursor="pointer"
                                                                colorScheme="purple"
                                                                leftIcon={
                                                                    <Icon
                                                                        as={
                                                                            RiPencilLine
                                                                        }
                                                                    />
                                                                }
                                                            >
                                                                Editar
                                                            </Button>
                                                        ) : (
                                                            <IconButton
                                                                aria-label="Editar usuário"
                                                                as="a"
                                                                size="sm"
                                                                fontSize="sm"
                                                                cursor="pointer"
                                                                colorScheme="purple"
                                                                icon={<RiPencilLine />}
                                                            />
                                                        )}
                                                    </Td>
                                                </Tr>
                                            )
                                        })
                                    }
                                </Tbody>
                            </>
                        )}
                    </Table>
                    { !isLoading &&
                    <Pagination
                        rowDirection={isWideScreen}
                        totalItems={data.total}
                        currentPage={page}
                        itemsPerPage={perPage}
                    /> }
                </Box>
            </Layout>
        </>
    );
}
