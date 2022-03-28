import { Button, Flex, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { mirageServer } from "../services/mirage";

interface SignInFormData{
  email: string
  password: string
}

export default function Home() {
  const yupSchema = yup.object({
    email: yup.string().email().required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  }).required();

  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(yupSchema)
  })

  const onSubmit: SubmitHandler<SignInFormData> = data => console.log(data);

  if(process.env.NODE_ENV === "development") {
    const mirage = mirageServer()
  }

  return (
    <>
      <Head>
        <title>Login | Dashgo</title>
      </Head>
      <Flex
        as="main"
        align="center"
        justify="center"
        w="100vw"
        h="100vh"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Flex
          as="form"
          w="100%"
          maxW={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
        >
          <Stack spacing="6">
            <Input
              name="email"
              type="email"
              label="E-mail"
              error={formState.errors.email}
              {...register("email")} />
            <Input
              name="password"
              type="password"
              label="Senha"
              error={formState.errors.password}
              {...register("password")} />
          </Stack>
          <Button
            type="submit"
            mt="6"
            size="lg"
            colorScheme="pink"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}