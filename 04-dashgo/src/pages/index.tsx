import { Button, Flex, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

interface SignInFormData{
  email: string
  password: string
}

export default function Home() {
  const {register, handleSubmit, formState} = useForm<SignInFormData>()

  const onSubmit: SubmitHandler<SignInFormData> = data => console.log(data);

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
              /* name="email" */
              type="email"
              label="E-mail"
              {...register("email")} />
            <Input
              /* name="password" */
              type="password"
              label="Senha"
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
