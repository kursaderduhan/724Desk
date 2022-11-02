import React, { memo } from 'react'
import {
  Flex,
  Text,
  HStack,
  VStack,
  Image,
  Button,
  Container,
} from '@chakra-ui/react'
import Link from 'next/link'
export const ServicePocket = () => {
  return (
    <Flex
      w={'full'}
      flexDirection={'column'}
      bg={'#E5E5E5'}
      justifyContent={'center'}
      py={{ base: 20, md: 100 }}
      gap={10}
      alignItems={'center'}
      pb={{ base: 20, md: 250 }}
    >
      <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
        <VStack w={'full'} gap='10'>
          <Link href={'/PriceList'}>
            <Text
              fontSize={'23px'}
              fontWeight={'500'}
              color={'#525252'}
              alignSelf={'flex-start'}
              cursor={'pointer'}
            >
              Hizmet Paketlerimiz
            </Text>
          </Link>
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={'center'}
            w={'100%'}
            gap={5}
            justifyContent={{ base: 'center', md: 'flex-start' }}
          >
            {Item.map(item => (
              <VStack
                w={
                  item.populer == true
                    ? { base: '340px', md: '320px' }
                    : { base: '340px', md: '288px' }
                }
                h={
                  item.populer == true
                    ? { base: '553px', md: '600px' }
                    : { base: '424px', md: '500px' }
                }
                bg={item.populer == true ? '#F2A77D' : 'white'}
                key={item.key}
                alignItems={{ base: 'center', md: 'flex-start' }}
                p={5}
                zIndex={item.populer == true ? 1 : 0}
                justifyContent={'space-between'}
                rounded={10}
              >
                {item.populer == true ? (
                  <HStack
                    w={'185px'}
                    h={'40px'}
                    bg={'rgba(138, 86, 49, 0.3)'}
                    rounded={5}
                    justifyContent={'center'}
                  >
                    <Image
                      src={'/star-1.png'}
                      alt={'ımg'}
                      w={'24px'}
                      h={'24px'}
                    />
                    <Text fontSize={'12px'} color={'white'} fontWeight={400}>
                      En çok tercih edilen
                    </Text>
                  </HStack>
                ) : null}
                <Image src={item.Image} alt={'ımg'} w={'82px'} h={'82px'} />
                <VStack
                  w={'full'}
                  alignItems={{ base: 'center', md: 'flex-start' }}
                >
                  <Text
                    fontSize={'33px'}
                    fontWeight={400}
                    color={item.populer == true ? '#FFE7CE' : '#C4C4C4'}
                  >
                    {item.time}
                  </Text>
                  <Text fontSize={'23px'} fontWeight={400} color={'#333333'}>
                    {item.price}
                  </Text>
                </VStack>
                <VStack w={'full'} gap={2}>
                  <VStack w={'full'}>
                    <HStack w={'full'} justifyContent={'space-between'}>
                      <Text
                        fontSize={'15px'}
                        fontWeight={400}
                        color={item.populer == true ? '#FFE7CE' : '#666666'}
                      >
                        Çözüm
                      </Text>
                      <Text
                        fontSize={'15px'}
                        fontWeight={500}
                        color={'#333333'}
                      >
                        {item.populer == true ? 'Bir' : 'Tümü'}
                      </Text>
                    </HStack>
                  </VStack>
                  <VStack w={'full'}>
                    <HStack w={'full'} justifyContent={'space-between'}>
                      <Text
                        fontSize={'15px'}
                        fontWeight={400}
                        color={item.populer == true ? '#FFE7CE' : '#666666'}
                      >
                        Kategori
                      </Text>
                      <Text
                        fontSize={'15px'}
                        fontWeight={500}
                        color={'#333333'}
                      >
                        {item.populer == true ? 'Bir' : 'Tümü'}
                      </Text>
                    </HStack>
                  </VStack>
                  <VStack w={'full'}>
                    <HStack w={'full'} justifyContent={'space-between'}>
                      <Text
                        fontSize={'15px'}
                        fontWeight={400}
                        color={item.populer == true ? '#FFE7CE' : '#666666'}
                      >
                        Ticket Sayısı
                      </Text>
                      <Text
                        fontSize={'15px'}
                        fontWeight={500}
                        color={'#333333'}
                      >
                        {item.ticketNumber}
                      </Text>
                    </HStack>
                  </VStack>
                  {item.supportNumber && (
                    <VStack w={'full'}>
                      <HStack w={'full'} justifyContent={'space-between'}>
                        <Text
                          fontSize={'15px'}
                          fontWeight={400}
                          color={item.populer == true ? '#FFE7CE' : '#666666'}
                        >
                          Destek Sayısı
                        </Text>
                        <Text
                          fontSize={'15px'}
                          fontWeight={500}
                          color={'#333333'}
                        >
                          {item.supportNumber}
                        </Text>
                      </HStack>
                    </VStack>
                  )}
                </VStack>
                <Button
                  w={item.populer == true ? 'full' : '163px'}
                  h={'36px'}
                  alignSelf={'center'}
                  color={item.populer == true ? '#F27C00' : '#525252'}
                >
                  {item.populer == true ? 'Hemen Seç' : 'Seç'}
                </Button>
              </VStack>
            ))}
          </Flex>
          <Text
            fontWeight={400}
            fontSize={{ base: '33px', md: '46px' }}
            color={'black'}
            textAlign={{ base: 'center' }}
          >
            Hemen Kullanmaya Başla!
          </Text>
          <Text color={'#666666'} fontSize={'14px'} fontWeight={400}>
            Hemen kaydol, adımları tamamla ve kullanmaya başla.
          </Text>
          <Button variant={'globalButton'} w={'236px'}>
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
  populer: boolean
  key: number
}

const Item: Array<itemProp> = [
  {
    Image: '/clock.png',
    time: 'Saatlik',
    price: '$ / Saat',
    result: 'Çözüm',
    category: 'Kategori',
    ticketNumber: 'Limitsiz',
    populer: false,
    key: 1
  },
  {
    Image: '/timer-start.png',
    time: 'Tek Seferlik',
    price: '$19.99/Tek sefer',
    result: 'Çözüm',
    category: 'Kategori',
    ticketNumber: 'Bir kere',
    supportNumber: 'Bir kere',
    populer: true,
    key: 2
  },
  {
    Image: '/calendar.png',
    time: '6 Aylık',
    price: '$59.99/Ay',
    result: 'Çözüm',
    category: 'Kategori',
    ticketNumber: 'Limitsiz',
    supportNumber: '30 kere',
    populer: false,
    key: 3
  },
  {
    Image: '/calendar-1.png',
    time: 'Yıllık',
    price: '$99.99/Ay',
    result: 'Çözüm',
    category: 'Kategori',
    ticketNumber: 'Limitsiz',
    supportNumber: '30 kere',
    populer: false,
    key: 4
  }
]
