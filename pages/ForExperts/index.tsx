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
        bgImage={{ base: '', md: '/experts-bg1.png' }}
        w={'full'}
        h={{ base: '', md: '746px' }}
        bgSize={'cover'}
        bgPos={'right'}
      >
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <VStack
            w={'full'}
            alignItems={{ base: 'center', md: 'flex-start' }}
            gap={{base:2,md:10}}
          >
            <Image
              src={'/expertsImg.png'}
              alt={''}
              w={{ base: '343px', md: '693px' }}
              h={{ base: '192px', md: '390px' }} display={{base:"flex",md:"none"}}
            />

            <Text
              fontSize={{ base: '23px', md: '33px' }}
              fontWeight={500}
              color={'#333333'}
              textAlign={{ base: 'center', md: 'left' }}
            >
              Para kazanarak bilgi birikiminizi <br /> artırabileceğiniz bir
              topluluğun <br />
              içinde yer alın!
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={400}
              color={'#666666'}
              display={{ base: 'none', md: 'flex' }}
            >
              Uzmanlığınızı paylaşmak birçok ihtiyaç sahibinin bilgi
              birikimizinden <br /> faydalanmasını sağlayacaktır. Böylece gelir
              elde ederken insanlara yardımcı <br /> olmanın mutluluğunu
              yaşayın.
            </Text>
            <Link href={'/BecomeAnExpert'}>
              <Button
                variant={'globalButton'}
                w={{ base: '343px', md: '250px' }}
              >
                Uzman Olmak İstiyorum
              </Button>
            </Link>
          </VStack>
        </Container>
      </HStack>
      <Flex flexDirection={'column'} py={50}>
        <Container maxW={{ xl: '1200px', xxl: '1600px' }} >
          <WhyBeExpert />
        </Container>
        <Footer />
      </Flex>
    </Layout>
  )
}

export default memo(Experts)
