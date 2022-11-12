import React, { memo } from 'react'
import Layout from '@components/Layout/Layout'
import {
  HStack,
  Container,
  Button,
  Text,
  VStack,
  Flex,
  Image
} from '@chakra-ui/react'
import Link from 'next/link'
import WhyBeExpert from '@components/Experts/WhyBeExpert'
import Footer from '@components/Footer/Footer'
export const Experts = () => {
  return (
    <Layout>
      <HStack
        bgImage={{ base: '', lg: '/experts-bg1.png' }}
        w={'full'}
        h={{ base: '', lg: '746px' }}
        bgSize={'cover'}
        bgPos={'right'}
      >
        <Container maxW={'1200px'}>
          <VStack w={'full'} alignItems={{ base: 'center', lg: 'flex-start' }}>
            <Image
              src={'/expertsImg.png'}
              alt={''}
              w={{ base: '343px', lg: '693px' }}
              h={{ base: '192px', lg: '390px' }}
              display={{ base: 'flex', lg: 'none' }}
            />

            <Text
              fontSize={{ base: '23px', lg: '33px' }}
              textStyle={'bigText'}
              color={'#333333'}
              pt={{ base: '16px', lg: '210px' }}
              textAlign={{ base: 'center', lg: 'left' }}
              maxW={'592px'}
            >
              Para kazanarak bilgi birikiminizi artırabileceğiniz bir topluluğun
              içinde yer alın!
            </Text>
            <Text
              pt={'12px'}
              color={'#666666'}
              textStyle={'subText'}
              display={{ base: 'none', lg: 'flex' }}
              maxW={'592px'}
            >
              Uzmanlığınızı paylaşmak birçok ihtiyaç sahibinin bilgi
              birikimizinden faydalanmasını sağlayacaktır. Böylece gelir elde
              ederken insanlara yardımcı olmanın mutluluğunu yaşayın.
            </Text>
            <Link href={'/BecomeAnExpert'}>
              <Button
                fontSize={'13px'}
                fontWeight={500} top={"42px"}
                lineHeight={'20px'}
                letterSpacing={'0.5px'}
                color={'white'}
                fontStyle={'normal'} bg={"#F27C00"} rounded={"5px"}
                w={{ base: '343px', lg: '250px' }}
              >
                Uzman Olmak İstiyorum
              </Button>
            </Link>
          </VStack>
        </Container>
      </HStack>
      <Flex flexDirection={'column'} py={50}>
        <Container maxW={'1200px'}>
          <WhyBeExpert />
        </Container>
        <Footer />
      </Flex>
    </Layout>
  )
}

export default memo(Experts)
