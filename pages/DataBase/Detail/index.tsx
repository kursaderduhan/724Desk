import React from 'react'
import {
  VStack,
  Flex,
  Box,
  Text,
  HStack,
  Container,
  IconButton
} from '@chakra-ui/react'
import Link from 'next/link'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Layout from '@components/Layout/Layout'
export const Detail = () => {
  return (
    <Layout>
      <VStack
        h={'170px'}
        bg={'#E5EDF4'}
        alignSelf={'flex-end'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        gap={5}
        py={10}
      >
        <Container maxW={{ xl:'1200px',xxl:'1600px'}}>
          <HStack>
            <Link href={'/DataBase'}>
              <IconButton
                aria-label='back'
                icon={<ChevronLeftIcon w={'24px'} h={'24px'} />}
                size={'md'} bg={"transparent"} _hover={{bg:"transparent", opacity:0.8}}
              ></IconButton>
            </Link>
            <Text fontSize={'15px'} fontWeight={500} color={'#333333'}>
              724Desk Bilgi Bankası
            </Text>
          </HStack>
        </Container>
      </VStack>
    </Layout>
  )
}

export default Detail
