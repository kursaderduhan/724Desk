import React, { memo, useState } from 'react'
import { VStack, Text, HStack, Divider,Flex } from '@chakra-ui/react'

const ProductSummary = () => {
  const [ınfo, setInfo] = useState<number>(4)
    
    interface itemProps {
        id: number
        service: string
        price: string
        totalPrice: string
    }
    const item: Array<itemProps> = [
         { id: 1, service: 'Saatlik', price: '$10.00/s', totalPrice: '$10' },
         { id: 2, service: 'Tek Seferlik', price: '$19.99/Tek sefer', totalPrice: '$19.99' },
         { id: 3, service: '6 Aylık', price: '$59.99/s', totalPrice: '$59.99' },
         { id: 4, service: 'Yıllık', price: '$99.99/s', totalPrice: '$99.99' },
    ]

    const result = item.filter(proo => proo.id == ınfo)
  return (
        <VStack>
          {result.map(product => (
          <VStack key={product.id} w={'288px'} h={'281px'} bg={'white'} gap={2}>
          <Text
            w={'full'}
            h={'42px'}
            bg={'#F5ECE3'}
            alignSelf={'center'}
            fontSize={'13px'}
            color={'#333333'}
            display={'flex'}
            fontWeight={500}
            alignItems={'center'}
            px={5}
            
          >
            Ürün Özeti
          </Text>
          <VStack alignItems={'flex-start'} w={'full'} px={5}>
            <HStack w={'full'} justifyContent={'space-between'}>
              <Text fontSize={'15px'} color={'#959595'} fontWeight={400}>
                Alınan hizmet paketi:
              </Text>
              <Text fontSize={'15px'} color={'black'} fontWeight={400}>
                {product.service}
              </Text>
            </HStack>
            <HStack w={'full'} justifyContent={'space-between'}>
              <Text fontSize={'15px'} color={'#959595'} fontWeight={400}>
                Paket ücreti:
              </Text>
              <Text fontSize={'15px'} color={'black'} fontWeight={400}>
                {product.totalPrice}
              </Text>
            </HStack>
          </VStack>
          <Divider />
          <VStack alignItems={'flex-start'} w={'full'} px={5}>
            <HStack w={'full'} justifyContent={'space-between'}>
              <Text fontSize={'15px'} color={'#959595'} fontWeight={400}>
                Ürün tutarı:
              </Text>
              <Text fontSize={'12px'} color={'#959595'} fontWeight={400}>
                $8.80
              </Text>
            </HStack>
            <HStack w={'full'} justifyContent={'space-between'}>
              <Text fontSize={'15px'} color={'#959595'} fontWeight={400}>
                Ürün vergisi:
              </Text>
              <Text fontSize={'12px'} color={'#959595'} fontWeight={400}>
                $1.20
              </Text>
            </HStack>
            <HStack w={'full'} justifyContent={'space-between'}>
              <Text fontSize={'15px'} color={'#959595'} fontWeight={400}>
                Toplam Tutar:
              </Text>
              <Text fontSize={'19px'} color={'black'} fontWeight={400}>
                $10
              </Text>
            </HStack>
                  </VStack>
                  </VStack>
      ))}
        </VStack>
  )
}

export default ProductSummary
