import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Header from '../Header/Header'
export const Layout = ({ children }: { children: any }) => {
  return (
    <Flex w={'full'} minH={'100vh'} flexDirection={"column"}>
      <Box w={"full"} pos={"fixed"} top={0}>
        <Header />
      </Box>
      <Box w={"full"} h={"full"}>{children}</Box>
    </Flex>
  )
}

export default Layout
