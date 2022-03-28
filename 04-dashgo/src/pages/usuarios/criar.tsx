import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Layout } from "../../components/Layout";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from "react-hook-form";

interface CreateUserFormData{
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function UserCreate() {
    const yupSchema = yup.object({
        name: yup.string().min(5, "Mínimo 5 caracteres").required("Nome obrigatório"),
        email: yup.string().min(6, "Mínimo 6 caracteres").email().required("E-mail obrigatório"),
        password: yup.string().required("Senha obrigatória"),
        confirmPassword: yup.string().required("Confirmação de senha obrigatória").oneOf(['', yup.ref("password")], "As senhas devem ser iguais")
    }).required();

    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(yupSchema)
    })

    const onSubmit: SubmitHandler<CreateUserFormData> = data => console.log(data);

    return (
        <>
            <Head>
                <title>Lista de usuários | Dashgo</title>
            </Head>
            <Layout>
                <Box
                  as="form"
                  flex="1"
                  borderRadius={8}
                  bg="gray.800"
                  p={["6", "8"]}
                  onSubmit={handleSubmit(onSubmit)}
                >
                    <Heading size="lg" fontWeight="bold">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700" />
                    <Stack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input
                              name="name"
                              type="text"
                              label="Nome completo"
                              {...register('name')}
                              error={formState.errors.name} />
                            <Input
                              name="email"
                              type="email"
                              label="E-mail"
                              {...register('email')}
                              error={formState.errors.email} />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input
                              name="password"
                              type="password"
                              label="Senha"
                              {...register('password')}
                              error={formState.errors.password} />
                            <Input
                              name="confirmPassword"
                              type="password"
                              label="Confirmação de senha"
                              {...register('confirmPassword')}
                              error={formState.errors.confirmPassword} />
                        </SimpleGrid>
                    </Stack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/usuarios" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button type="submit" colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Layout>
        </>
    );
}
