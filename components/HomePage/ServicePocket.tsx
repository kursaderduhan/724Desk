import React, { memo } from 'react'
import {
  Flex,
  Text,
  HStack,
  VStack,
  Image,
  Button,
  Container
} from '@chakra-ui/react'
export const ServicePocket = () => {
  return (
    <Flex
      w={'full'}
      flexDirection={'column'}
      bg={'#E5E5E5'}
      justifyContent={'center'}
      py={100}
      gap={10}
      alignItems={'center'}
      pb={250}
    >
      <Container maxW={'1200px'}>
        <VStack w={'full'} gap='10'>
          <Text
            fontSize={'23px'}
            fontWeight={'500'}
            color={'#525252'}
            alignSelf={'flex-start'}
          >
            Hizmet Paketlerimiz
          </Text>
          <HStack w={'full'} gap='5'>
            {Item.map(item => (
              <VStack
                w={'288px'}
                h={'500px'}
                bg={'white'}
                key={item.key}
                alignItems={'flex-start'}
                p={5}
              >
                <Image src={item.Image} alt={'ımg'} w={'82px'} h={'82px'} />
                <Text fontSize={'33px'} fontWeight={400} color={'#C4C4C4'}>
                  {item.time}
                </Text>
                <Text fontSize={'23px'} fontWeight={400} color={'#333333'}>
                  {item.price}
                </Text>
                <HStack></HStack>
                <Button w={'163px'} h={'36px'} alignSelf={'center'}>
                  Seç
                </Button>
              </VStack>
            ))}
          </HStack>
          <Text fontWeight={400} fontSize={'46px'} color={'black'}>
            Hemen Kullanmaya Başla!
          </Text>
          <Text color={'#666666'} fontSize={'14px'} fontWeight={400}>
            Hemen kaydol, adımları tamamla ve kullanmaya başla.
          </Text>
          <Button
            bg={'#F27C00'}
            color={'white'}
            _hover={{ opacity: 0.8 }}
            w={'236px'}
          >
            Hemen Başla
          </Button>
        </VStack>
      </Container>
    </Flex>
  )
}

export default memo(ServicePocket)

interface itemProp {
  Image: string
  time: string
  price: string
  result: string
  category: string
  ticketNumber: string
  supportNumber?: string
  key: number
}

const Item: Array<itemProp> = [
  {
    Image: '/clock.png',
    time: 'Saatlik',
    price: '$ / Saat',
    result: 'Çözüm',
    category: 'Kategori',
    ticketNumber: 'Ticket Sayısı',
    key: 1
  },
  {
    Image: '/timer-start.png',
    time: 'Tek Seferlik',
    price: '$19.99/Tek sefer',
    result: 'Çözüm',
    category: 'Kategori',
    ticketNumber: 'Ticket Sayısı',
    supportNumber: 'Destek Sayısı',
    key: 2
  },
  {
    Image: '/calendar.png',
    time: '6 Aylık',
    price: '$59.99/Ay',
    result: 'Çözüm',
    category: 'Kategori',
    ticketNumber: 'Ticket Sayısı',
    supportNumber: 'Destek Sayısı',
    key: 3
  },
  {
    Image: '/calendar-1.png',
    time: 'Yıllık',
    price: '$99.99/Ay',
    result: 'Çözüm',
    category: 'Kategori',
    ticketNumber: 'Ticket Sayısı',
    supportNumber: 'Destek Sayısı',
    key: 4
  }
]
