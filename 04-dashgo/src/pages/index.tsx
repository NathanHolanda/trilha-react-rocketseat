import { Button, Flex, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { Input } from "../components/Form/Input";

export default function Home() {
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
            <Input name="email" type="email" label="E-mail" />
            <Input name="password" type="password" label="Senha" />
          </Stack>
          <Button
            type="submit"
            mt="6"
            size="lg"
            colorScheme="pink"
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
