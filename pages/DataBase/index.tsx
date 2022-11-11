import React, { memo, useState } from 'react'
import Layout from '@components/Layout/Layout'
import {
  VStack,
  Text,
  Container,
  Flex,
  Icon,
  HStack,
  IconButton
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
        display={{ base: 'none', lg: 'flex' }}
      >
        <Container maxW={'1200px'}>
          <Flex display={page} pt={'114px'} pb={'32px'}>
            <Text textStyle={'homePageText'} color={'#333333'}>
              724Desk Bilgi Bankası
            </Text>
            <Text textStyle={'categoriesText'} color={'#959595'}>
              İhtiyacın olan çözümlere ulaşabilir, daha önce yazılmış makaleleri
              inceleyerek sorunlarını çözebilirsin.
            </Text>
          </Flex>
          <HStack display={dataBase} h={'full'} w={'full'}>
            <IconButton
              aria-label='back'
              as={ChevronLeftIcon}
              boxSize={6}
              bg={'transparent'}
              _hover={{ bg: 'transparent', opacity: 0.8 }}
              onClick={() => closePage()}
              cursor={'pointer'}
            />

            <Text
              textStyle={'homePageSubText'}
              fontWeight={500}
              color={'#333333'}
            >
              724Desk Bilgi Bankası
            </Text>
          </HStack>
        </Container>
      </VStack>
      <VStack bg={'#F7FCFE'}>
        <VStack
          w='full'
          pb={{ base: '82px', lg: '180px' }}
          pt={{ base: '16px', lg: '42px' }}
          display={page}
        >
          <Container maxW={'1200px'}>
            <MostRead changePage={() => changePage()} />
            <News />
          </Container>
        </VStack>
        <VStack w='full' py={50} display={dataBase} bg={'#F7FCFE'}>
          <Container maxW={'1200px'}>
            <TrendPage />
          </Container>
        </VStack>
        <Container maxW={'1200px'} bg={'#F7FCFE'}>
          <Footer />
        </Container>
      </VStack>
    </Layout>
  )
}

export default memo(DataBase)
