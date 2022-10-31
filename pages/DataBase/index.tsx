import React, { memo, useState } from 'react'
import Layout from '@components/Layout/Layout'
import {
  VStack,
  Text,
  Container,
  HStack,
  Image,
  Flex,
  IconButton,
  Icon
} from '@chakra-ui/react'
import MostRead from '@components/DataBase/MostRead'
import News from '@components/DataBase/News'
import Footer from '@components/Footer/Footer'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import TrendPage from '@components/DataBase/TrendPage'
export const DataBase = () => {
  const [page, setPage] = useState<string>('')
  const [dataBase, setDataBase] = useState<string>('none')
  const changePage = () => {
    setPage('none')
    setDataBase('')
  }
  const closePage = () => {
    setDataBase('none')
    setPage('')
  }
  return (
    <Layout>
      <VStack
        h={'196px'}
        bg={'#E5EDF4'}
        alignSelf={'flex-end'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        gap={5}
        py={10}
        display={{ base: 'none', md: 'flex' }}
      >
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <Flex display={page}>
            <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
              724Desk Bilgi Bankası
            </Text>
            <Text fontSize={'12px'} fontWeight={400} color={'#959595'}>
              İhtiyacın olan çözümlere ulaşabilir, daha önce yazılmış makaleleri
              inceleyerek sorunlarını çözebilirsin.
            </Text>
          </Flex>
          <Flex display={dataBase} w={'full'} flexDirection={'row'}>
            <Icon
              aria-label='back'
              as={ChevronLeftIcon}
              size={'md'}
              bg={'transparent'}
              _hover={{ bg: 'transparent', opacity: 0.8 }}
              onClick={() => closePage()}
              cursor={'pointer'}
            />

            <Text fontSize={'15px'} fontWeight={500} color={'#333333'}>
              724Desk Bilgi Bankası
            </Text>
          </Flex>
        </Container>
      </VStack>
      <VStack bg={'white'} w='full' py={{ base: 0, md: 50 }} display={page}>
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <MostRead changePage={() => changePage()} />
          <News />
        </Container>
      </VStack>
      <VStack bg={'white'} w='full' py={50} display={dataBase}>
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <TrendPage />
        </Container>
      </VStack>
      <Footer />
    </Layout>
  )
}

export default memo(DataBase)
