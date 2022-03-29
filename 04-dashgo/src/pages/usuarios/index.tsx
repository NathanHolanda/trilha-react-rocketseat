import { Box, Button, Text, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, IconButton, Spinner } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { Layout } from "../../components/Layout";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
    const query = useQuery('users', async () => {
        await fetch("http://localhost:3000/api/users")
            .then(response => response.json())
            .then(data => console.log(data))
    })

    console.log(query)

    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    })

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
                        </Heading>
                        <Link href="/usuarios/criar" passHref>
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
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha" variant="striped">
                        {query.isLoading ? (
                            <Flex justify="center">
                                <Spinner />
                            </Flex>
                        ) : query.error ? (
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
                                        <Th
                                            display={
                                                isWideScreen
                                                    ? "table-cell"
                                                    : "none"
                                            }
                                        >
                                            Data de cadastro
                                        </Th>
                                        <Th w="8"></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td px="6">
                                            <Checkbox colorScheme="pink" />
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Text fontWeight="bold">
                                                    Nathan Holanda
                                                </Text>
                                                <Text
                                                    fontSize="sm"
                                                    color="gray.300"
                                                >
                                                    nathan.hl.contato@gmail.com
                                                </Text>
                                            </Box>
                                        </Td>
                                        <Td
                                            display={
                                                isWideScreen
                                                    ? "table-cell"
                                                    : "none"
                                            }
                                        >
                                            25 de março, 2022
                                        </Td>
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
                                                            as={RiPencilLine}
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
                                    <Tr>
                                        <Td px="6">
                                            <Checkbox colorScheme="pink" />
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Text fontWeight="bold">
                                                    Nathan Holanda
                                                </Text>
                                                <Text
                                                    fontSize="sm"
                                                    color="gray.300"
                                                >
                                                    nathan.hl.contato@gmail.com
                                                </Text>
                                            </Box>
                                        </Td>
                                        <Td
                                            display={
                                                isWideScreen
                                                    ? "table-cell"
                                                    : "none"
                                            }
                                        >
                                            25 de março, 2022
                                        </Td>
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
                                                            as={RiPencilLine}
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
                                </Tbody>
                            </>
                        )}
                    </Table>
                    <Pagination rowDirection={isWideScreen} />
                </Box>
            </Layout>
        </>
    );
}
