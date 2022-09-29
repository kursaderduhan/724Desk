import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Header from '../Header/Header'
export const Layout = ({ children,headerChoose=false }: { children: any,headerChoose?:boolean }) => {
  return (
    <Flex w={'full'} minH={'100vh'} minW={"100vw"} flexDirection={"column"}>
      <Box w={"full"} pos={"absolute"} top={0} zIndex="4" minW={"100vw"}>
        <Header headerProp={headerChoose} />
      </Box>
      <Box w={"full"} h={"full"} minW={"100vw"}>{children}</Box>
    </Flex>
  )
}

export default Layout
