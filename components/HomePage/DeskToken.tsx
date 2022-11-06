import React, { memo, useState, useEffect } from 'react'
import {
  Flex,
  VStack,
  Text,
  HStack,
  Box,
  Button,
  Image,
  SimpleGrid
} from '@chakra-ui/react'
import { Counter } from './Counter'
import Link from 'next/link'
export const DeskToken = () => {
  return (
    <VStack
      bg={'#333862'}
      w={'full'}
      py={{ base: '54px', lg: '120px' }}
      h={{
        base: '2110px',
        lg: '1200px'
      }}
      justifyContent={'space-around'}
      pos={'relative'}
      overflow={'visible'}
      gap={{ base: '82px', lg: '240px' }}
    >
      <Box
        pos={'absolute'}
        right={0}
        top={10}
        display={{ base: 'none', lg: 'flex' }}
      >
        <Image src={'/deskCoin-2.png'} alt={''} w={'590px'} h={'890px'} />{' '}
      </Box>
      <VStack zIndex={1} gap={{ base: '24px', lg: '32px' }}>
        <Text
          textStyle={'deskTokenHead'}
          color={'white'}
          alignSelf={'flex-start'}
        >
          Desk Token Verileri
        </Text>
        <Flex
          w={{ base: '343px', lg: 1200 }}
          h={{ base: '409px', lg: '250px' }}
          bg={'#505583'}
          rounded={10}
          px={'32px'}
          alignItems={'center'}
          overflow={'hidden'}
          justifyContent={'space-between'}
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <VStack
            alignItems={'flex-start'}
            h={'full'}
            justifyContent={'space-evenly'}
          >
            <Text
              fontSize={{ base: '15px', lg: '23px' }}
              fontWeight={500}
              color={'white'}
              textStyle={'deakTokenHead'}
              alignSelf={'flex-start'}
            >
              Public Sale Whitelisting
            </Text>
            <Counter />
          </VStack>
          <VStack>
            <Text
              fontSize={{ base: '15px', lg: '23px' }}
              color={'#C4C4C4'}
              textStyle={'deskTokenHead'}
              alignSelf={'flex-start'}
            >
              18.000.000 DEX Token
            </Text>
            <Text
              fontSize={'13px'}
              fontWeight={500}
              color={'white'}
              lineHeight={'20px'}
              fontStyle={'normal'}
              letterSpacing={'0.1px'}
              alignSelf={'flex-end'}
            >
              Hard Cap
            </Text>
            <Box
              w={{ base: 'full', lg: '700px' }}
              h={'16px'}
              bg={'#363B66'}
              borderRadius={'100px'}
            >
              <Box
                w={{ base: 'full', lg: '600px' }}
                h={'16px'}
                bg={'linear-gradient(90deg, #505583 7.29%, #ADB3E4 100%)'}
                borderRadius={'100px'}
              />
            </Box>
            <Text
              fontSize={'13px'}
              fontWeight={500}
              color={'white'}
              alignSelf={'flex-end'}
              lineHeight={'20px'}
              fontStyle={'normal'}
              letterSpacing={'0.1px'}
            >
              375K USD
            </Text>
            <Text
              fontSize={{ base: '15px', lg: '19px' }}
              color={'#C4C4C4'}
              fontWeight={500}
              textStyle={'homePageText'}
              alignSelf={'flex-start'}
            >
              1 DEX = 0.10 USD
            </Text>
            <Link href={'/DeskToken'}>
              <Button
                variant={'globalButton'}
                fontSize={'13px'}
                w={'169px'}
                h={'36px'}
                alignSelf={{ base: 'center', lg: 'flex-end' }}
                borderRadius={'5px'}
              >
                Hemen Katıl
              </Button>
            </Link>
          </VStack>
        </Flex>
      </VStack>
      <VStack
        pos={'relative'}
        overflow={'visible'}
        gap={{ base: '24px', lg: '32px' }}
      >
        <Box
          pos={'absolute'}
          bottom={32}
          left={40}
          display={{ base: 'none', lg: 'flex' }}
        >
          <Image
            src={'/deskCoin-1.png'}
            alt={'deskCoin'}
            w={'328px'}
            h={'328px'}
          />
        </Box>
        <Text
          textStyle={'deskTokenHead'}
          color={'white'}
          alignSelf={'flex-start'}
          zIndex={1}
        >
          Anlık Veriler
        </Text>
        <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={"16px"} zIndex={1}>
          {item.map(ıtem => (
            <VStack
              key={ıtem.id}
              w={'288px'}
              h={'337px'} justifyContent={"space-between"}
              bg={'#505583'}
              rounded={10}
              py={'24px'}
            >
              <HStack alignItems={"center"} alignSelf={'flex-start'} px={3} >
                <Image src={ıtem.Image} alt={'ımg'} w={'24px'} h={'36px'} />
                <Text
                  fontSize={'13px'}
                  color={'#EAEAEA'}
                  fontWeight={500}
                  alignSelf={'flex-end'}
                  lineHeight={'20px'}
                  fontStyle={'normal'}
                  letterSpacing={'0.1px'} pb={1}
                >
                  {ıtem.desc}
                </Text>
              </HStack>
              <Image src={ıtem.grafik} alt={'grafik'} w={'260px'} h={'102px'} />
              <Text
                fontSize={'58px'}
                fontWeight={300}
                lineHeight={'87px'}
                letterSpacing={'-0.5px'}
                fontStyle={'normal'}
                alignSelf={'center'}
                color={'white'}
              >
                {ıtem.counter}
              </Text>
              <Text
                color={'#C4C4C4'}
                fontSize={'14px'}
                fontWeight={400}
                alignSelf={'center'}
              >
                {ıtem.desc2}
              </Text>
            </VStack>
          ))}
        </Flex>
      </VStack>
    </VStack>
  )
}

export default memo(DeskToken)

interface itemProps {
  id: number
  Image: string
  desc: string
  grafik: string
  counter: string
  desc2: string
}

const item: Array<itemProps> = [
  {
    id: 1,
    Image: '/arrow-top.png',
    desc: 'Düne göre: %6 artış',
    grafik: '/dt-1.png',
    counter: '15',
    desc2: 'Anlık İşlem'
  },
  {
    id: 2,
    Image: '/arrow-top.png',
    desc: 'Geçen aya göre: %11 artış',
    grafik: '/dt-2.png',
    counter: '267',
    desc2: 'Problem Çözümü'
  },
  {
    id: 3,
    Image: '/arrow-top.png',
    desc: 'Geçen aya göre: %2 artış',
    grafik: '/dt-3.png',
    counter: '1364',
    desc2: 'Toplam Uzman Sayısı'
  },
  {
    id: 4,
    Image: '/arrow-bottom.png',
    desc: 'Düne göre: %1 azalış',
    grafik: '/dt-4.png',
    counter: '34',
    desc2: 'Aktif Uzman Sayısı'
  }
]
