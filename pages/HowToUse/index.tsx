import React, { memo } from 'react'
import Layout from '@components/Layout/Layout'
import { HStack, Container, Text, VStack } from '@chakra-ui/react'
import ResultSolve from '@components/HowToUse/ResultSolve'
import Learn from '@components/HowToUse/Learn'
import Solve from '@components/HowToUse/Solve'
import Footer from '@components/Footer/Footer'
export const HowToUse = () => {
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
        py={10} display={{base:"none",md:"flex"}}
      >
        <Container maxW={{ xl:'1200px',xxl:'1600px'}}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Nasıl Kullanılır?
          </Text>
          <Text fontSize={'12px'} fontWeight={'400'} color={'#959595'}>
            Projenin aşamalarını, nasıl kullanıldığını ve ilerleyişini
            inceleyin.
          </Text>
        </Container>
      </HStack>
      <VStack bg={'#F7FCFE'} w={'full'}>
        <Container maxW={{ xl:'1200px',xxl:'1600px'}}>
          <ResultSolve />
          <Learn />
          <Solve />
          <Footer/>
        </Container>
      </VStack>
    </Layout>
  )
}

export default memo(HowToUse)
