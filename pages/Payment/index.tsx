import React, { memo } from 'react'
import Layout from '@components/Layout/Layout'
import { HStack, VStack, Text, Container, Flex } from '@chakra-ui/react'
import PaymentMethod from '@components/Payments/PaymentMethod'
import ProductSummary from '@components/Payments/ProductSummary'
import CouponCode from '@components/Payments/CouponCode'

export const Payment = () => {
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
            Ödeme
          </Text>
          <Text fontSize={'12px'} fontWeight={'400'} color={'#959595'}>
            Farklı ödeme yöntemleri ile ödemenizi tamamlayın.
          </Text>
        </Container>
      </HStack>
      <HStack bg={'#E5E5E5'} w={'full'}>
        <Container maxW={'1200px'}>
          <Flex w={'full'} py={20} justifyContent={'center'} gap={5}>
            <PaymentMethod />
            <VStack>
              <ProductSummary />
              <CouponCode />
            </VStack>
          </Flex>
        </Container>
      </HStack>
    </Layout>
  )
}

export default memo(Payment)
