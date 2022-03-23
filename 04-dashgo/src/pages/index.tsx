import { Button, Flex, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Dashgo</title>
      </Head>
      <Flex
        as='main'
        align='center'
        justify='center'
        w='100vw'
        h='100vh'
      >
        <Flex
          as='form'
          w='100%'
          maxW={360}
          bg='gray.800'
          p='8'
          borderRadius={8}
          flexDir='column'
        >
          <Stack spacing='6'>
            <FormControl>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input
                name='email'
                type='email'
                focusBorderColor='pink.500'
                bgColor='gray.900'
                variant='filled'
                _hover={{
                  bgColor: 'gray.900'
                }}
                size='lg'
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='password'>Senha</FormLabel>
              <Input
                id='password'
                name='password'
                type='password'
                focusBorderColor='pink.500'
                bgColor='gray.900'
                variant='filled'
                _hover={{
                  bgColor: 'gray.900'
                }}
                size='lg'
              />
            </FormControl>
          </Stack>
          <Button
            type='submit'
            mt='6'
            size='lg'
            colorScheme='pink'
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
