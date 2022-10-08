import React from 'react'
import { VStack, Text, Image, Divider, HStack, Button } from '@chakra-ui/react'
import Link from  'next/link'

const PaymentsFailed = ({closeFailedPage} : any) => {
  return (
    <VStack py={5}>
  <Text color={'#DC2626'} fontSize={'23px'} fontWeight={500}>
    Ödeme Başarısız
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
    <Image src={'paymentFail.png'} alt={'failed'} w={'205px'} h={'209px'} />
    <Divider />
    <VStack w={'full'} py={5}>
      <HStack w={'full'} justifyContent={'space-between'}>
        <Text color={'#666666'} fontSize={'15px'} fontWeight={400}>
          Amount
        </Text>
        <Text color={'#333333'} fontSize={'15px'} fontWeight={'500'}>
          225₺
        </Text>
      </HStack>
      <Text fontSize={"15px"} color={"#959595"} fontWeight={400} textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. </Text>
    </VStack>
  </VStack>
  <VStack w={'440px'} px={1}>
    <HStack w={'full'} justifyContent={'center'}>
      <Link href={'/Payment'}>
        <Button
          w={'138px'}
          bg={'white'}
          color={'#F27C00'}
          fontSize={'14px'}
          fontWeight={500}
          borderRadius={10}
          _hover={{ opacity: 0.8 }} onClick={() => closeFailedPage()}
        >
          Ana Sayfa
        </Button>
      </Link>
    </HStack>
  </VStack>
</VStack>

  )
}

export default PaymentsFailed