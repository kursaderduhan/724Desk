import { HStack, Container, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import Layout from '@components/Layout/Layout'
import AboutUs from '@components/Documents/AboutUs'
import UserContract from '@components/Documents/UserContract'
import Footer from '@components/Footer/Footer'
const Info = () => {
  return (
    <Layout>
      <HStack
        h={'196px'}
        bg={'#E5EDF4'}
        flexDirection={'column'}
        alignSelf={'flex-end'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        gap={5}
        py={10}
      >
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Hakkımızda
          </Text>
          <HStack w={'full'} justifyContent={'space-between'}>
            <Text fontSize={'12px'} fontWeight={400} color={'#959595'}>
              Hakkımızda detay sayfası
            </Text>
          </HStack>
        </Container>
      </HStack>
      <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
        <AboutUs/>
        {/* <UserContract/> */}
      </Container>
      <Footer/>
    </Layout>
  )
}

export default Info
