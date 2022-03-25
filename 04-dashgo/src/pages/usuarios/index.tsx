import {
    Box,
    Button,
    Text,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import Head from "next/head";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Layout } from "../../components/Layout";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
    return (
        <>
            <Head>
                <title>Lista de usuários | Dashgo</title>
            </Head>
            <Layout>
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                        </Heading>
                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            cursor="pointer"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} />}
                        >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
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
                                        <Text fontSize="sm" color="gray.300">
                                            nathan.hl.contato@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>25 de março, 2022</Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        cursor="pointer"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Layout>
        </>
    );
}
