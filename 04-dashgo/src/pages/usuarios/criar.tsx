import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Layout } from "../../components/Layout";

export default function UserCreate() {
    return (
        <>
            <Head>
                <title>Lista de usuários | Dashgo</title>
            </Head>
            <Layout>
                <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                    <Heading size="lg" fontWeight="bold">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700" />
                    <Stack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="name" type="text" label="Nome completo" />
                            <Input name="email" type="email" label="E-mail" />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="password" type="password" label="Senha" />
                            <Input name="confirm_password" type="password" label="Confirmação de senha" />
                        </SimpleGrid>
                    </Stack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/usuarios" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Layout>
        </>
    );
}
