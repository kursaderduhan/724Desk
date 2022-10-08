import React from 'react'
import { Text, Image, VStack, HStack, Button, Divider } from '@chakra-ui/react'
import Link from 'next/link'
const PaymentSuccesfull = () => {
  return (
    <VStack py={5}>
      <Text color={'#56C568'} fontSize={'23px'} fontWeight={500}>
        Ödeme Başarılı
      </Text>
      <VStack
        bgImage={'/PaymentBg.png'}
        w={'444px'}
        h={'444px'}
        bgPos={'center'}
        overflow={'hidden'}
        py={5}
        px={10}
        bgSize={'cover'}
        gap={2}
      >
        <Image
          src={'paymentImg.png'}
          alt={'succesfull'}
          w={'208px'}
          h={'210px'}
        />
        <Divider />
        <VStack w={'full'} py={5}>
          <HStack w={'full'} justifyContent={'space-between'}>
            <Text color={'#666666'} fontSize={'15px'} fontWeight={400}>
              Transaction Number
            </Text>
            <Text color={'#333333'} fontSize={'15px'} fontWeight={'500'}>
              1249981298312698213
            </Text>
          </HStack>
          <HStack w={'full'} justifyContent={'space-between'}>
            <Text color={'#666666'} fontSize={'15px'} fontWeight={400}>
              Amount Paid
            </Text>
            <Text color={'#333333'} fontSize={'15px'} fontWeight={'500'}>
              225₺
            </Text>
          </HStack>
          <HStack w={'full'} justifyContent={'space-between'}>
            <Text color={'#666666'} fontSize={'15px'} fontWeight={400}>
              Bank
            </Text>
            <Text color={'#333333'} fontSize={'15px'} fontWeight={'500'}>
              Sample Bank
            </Text>
          </HStack>
        </VStack>
      </VStack>
      <VStack w={'440px'} px={1}>
        <HStack w={'full'} justifyContent={'space-between'}>
          <Link href={'/'}>
            <Button
              w={'138px'}
              bg={'white'}
              color={'#F27C00'}
              fontSize={'14px'}
              fontWeight={500}
              borderRadius={10}
              _hover={{ opacity: 0.8 }}
            >
              Ana Sayfa
            </Button>
          </Link>
          <Button
            w={'138px'}
            bg={'white'}
            color={'#F27C00'}
            fontSize={'14px'}
            fontWeight={500}
            borderRadius={10}
            _hover={{ opacity: 0.8 }}
          >
            Yazdır
          </Button>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default PaymentSuccesfull
