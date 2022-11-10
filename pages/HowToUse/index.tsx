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
        pt={"114px"} display={{base:"none",md:"flex"}}
      >
        <Container maxW={"1200px"}>
          <Text color={'#333333'} textStyle={"homePageText"}>
            Nasıl Kullanılır?
          </Text>
          <Text color={'#959595'} textStyle={"categoriesText"} pt={"3px"} pb={"32px"}>
            Projenin aşamalarını, nasıl kullanıldığını ve ilerleyişini
            inceleyin.
          </Text>
        </Container>
      </HStack>
      <VStack bg={'#F7FCFE'} w={'full'}>
        <Container maxW={"1200px"}>
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
