import React, { memo } from 'react'
import Layout from '@components/Layout/Layout'
import { HStack, Container, Button, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import WhyBeExpert from '@components/Experts/WhyBeExpert'
export const Experts = () => {
  return (
    <Layout>
      <HStack
        bgImage={'/experts-bg1.png'}
        w={'full'}
        h={'746px'}
        bgSize={'cover'}
        bgPos={'right'}
      >
        <Container maxW={{ xl:'1200px',xxl:'1600px'}}>
          <VStack w={'full'} alignItems={'flex-start'} gap={10}>
            <Text fontSize={'33px'} fontWeight={500} color={'#333333'}>
              Para kazanarak bilgi birikiminizi <br /> artırabileceğiniz bir
              topluluğun <br />
              içinde yer alın!
            </Text>
            <Text fontSize={'14px'} fontWeight={400} color={'#666666'}>
              Uzmanlığınızı paylaşmak birçok ihtiyaç sahibinin bilgi
              birikimizinden <br /> faydalanmasını sağlayacaktır. Böylece gelir
              elde ederken insanlara yardımcı <br /> olmanın mutluluğunu
              yaşayın.
            </Text>
            <Link href={'/Experts/BecomeAnExpert'}>
              <Button variant={'globalButton'}>Uzman Olmak İstiyorum</Button>
            </Link>
          </VStack>
        </Container>
      </HStack>
      <HStack py={50}>
        <Container maxW={{ xl:'1200px',xxl:'1600px'}}>
          <WhyBeExpert />
        </Container>
      </HStack>
    </Layout>
  )
}

export default memo(Experts)
