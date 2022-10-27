import React,{memo} from 'react'
import { Flex, Box, VStack } from '@chakra-ui/react'
import Header from '../Header/Header'
import Head from 'next/head'

export const Layout = ({
  children,
  headerChoose = false
}: {
  children: any
  headerChoose?: boolean
}) => {
  return (
    <Flex minH={'100vh'} flexDirection={'column'} w={"100%"}>
      <Head>
        <title>724Desk</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Box
        w={'100%'}
        pos={{ base: 'initial', md: 'absolute' }}
        top={0}
        zIndex='4'
      >
        <Header headerProp={headerChoose} />
      </Box>
      <Box w={'100%'} h={'full'}>
        {children}
      </Box>
    </Flex>
  )
}

export default memo(Layout)
