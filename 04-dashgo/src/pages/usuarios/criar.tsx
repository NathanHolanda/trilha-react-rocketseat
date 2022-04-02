import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Spinner, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Layout } from "../../components/Layout";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { api } from "../../services/axios";
import { queryClient } from "../../services/react-query";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface CreateUserFormData{
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function UserCreate() {
    const router = useRouter()

    const yupSchema = yup.object({
        name: yup.string().min(5, "Mínimo 5 caracteres").required("Nome obrigatório"),
        email: yup.string().min(6, "Mínimo 6 caracteres").email().required("E-mail obrigatório"),
        password: yup.string().required("Senha obrigatória"),
        confirmPassword: yup.string().required("Confirmação de senha obrigatória").oneOf(['', yup.ref("password")], "As senhas devem ser iguais")
    }).required();

    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(yupSchema)
    })

    const createUser = useMutation(async (user: CreateUserFormData) => {
        delete user.confirmPassword

        const response = await api.post("/users", {
            user: {
                ...user,
                created_at: new Date()
            }
        })

        return response.data.user
    },
    {
       onSuccess: () => queryClient.invalidateQueries("user")
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
        await createUser.mutateAsync(data)
    }

    useEffect(() => {
        if( !createUser.isLoading && createUser.isSuccess ){
            router.push("/usuarios")
        }
    }, [createUser.isLoading, createUser.isSuccess])

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
                  onSubmit={handleSubmit(handleCreateUser)}
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
                            <Button
                              type="submit"
                              colorScheme="pink"
                            >
                                {
                                    createUser.isLoading ? 
                                    <Spinner size="sm" /> :
                                    "Salvar"
                                }
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Layout>
        </>
    );
}
