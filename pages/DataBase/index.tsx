import React, { memo } from 'react'
import Layout from '@components/Layout/Layout'
import { VStack, Text, Container, HStack, Image, Flex } from '@chakra-ui/react'
import MostRead from '@components/DataBase/MostRead'
import News from '@components/DataBase/News'
import Footer from '@components/Footer/Footer'
export const DataBase = () => {
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
      >
        <Container maxW={'1200px'}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            724Desk Bilgi Bankası
          </Text>
          <Text fontSize={'12px'} fontWeight={400} color={'#959595'}>
            İhtiyacın olan çözümlere ulaşabilir, daha önce yazılmış makaleleri
            inceleyerek sorunlarını çözebilirsin.
          </Text>
        </Container>
      </VStack>
      <VStack bg={'white'} w='full' py={50}>
        <Container maxW={'1200px'}>
          <MostRead />
          <News />
        </Container>
        <Footer />
      </VStack>
    </Layout>
  )
}

export default memo(DataBase)
