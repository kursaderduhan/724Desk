import React, { memo, useState, useEffect } from 'react'
import {
  Flex,
  VStack,
  Text,
  HStack,
  Box,
  Button,
  Image
} from '@chakra-ui/react'
import { Counter } from './Counter'
import Link from 'next/link'
export const DeskToken = () => {
  return (
    <VStack
      bg={'#333862'}
      w={'full'}
      h={'1200px'}
      justifyContent={'space-around'}
      pos={'relative'}
      overflow={'visible'}
    >
      <Box pos={'absolute'} right={0} top={10}>
        <Image src={'/deskCoin-2.png'} alt={''} w={'590px'} h={'890px'} />{' '}
      </Box>
      <VStack zIndex={1}>
        <Text
          fontSize={'23px'}
          fontWeight={500}
          color={'white'}
          alignSelf={'flex-start'}
        >
          Desk Token Verileri
        </Text>
        <HStack
          w={'1200px'}
          h={'250px'}
          bg={'#505583'}
          gap={5}
          rounded={10}
          px={5}
          justifyContent={'space-between'}
        >
          <VStack
            alignItems={'flex-start'}
            h={'full'}
            justifyContent={'space-evenly'}
          >
            <Text
              fontSize={'23px'}
              fontWeight={500}
              color={'white'}
              alignSelf={'flex-start'}
            >
              Public Sale Whitelisting
            </Text>
            <Counter />
          </VStack>
          <VStack>
            <Text
              fontSize={'23px'}
              color={'#C4C4C4'}
              fontWeight={500}
              alignSelf={'flex-start'}
            >
              18.000.000 DEX Token
            </Text>
            <Text
              fontSize={'13px'}
              fontWeight={500}
              color={'white'}
              alignSelf={'flex-end'}
            >
              Hard Cap
            </Text>
            <Box w={'700px'} h={'16px'} bg={'#363B66'} borderRadius={'100px'}>
              <Box
                w={'600px'}
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
            >
              375K USD
            </Text>
            <Text
              fontSize={'23px'}
              color={'#C4C4C4'}
              fontWeight={500}
              alignSelf={'flex-start'}
            >
              1 DEX = 0.10 USD
            </Text>
            <Link href={"/DeskToken"}>
            <Button
              variant={'globalButton'}
              fontSize={'13px'}
              w={'169px'}
              alignSelf='flex-end'
            >
              Hemen Katıl
              </Button>
              </Link>
          </VStack>
        </HStack>
      </VStack>
      <VStack pos={'relative'} overflow={'visible'}>
        <Box pos={'absolute'} bottom={32} left={40}>
          <Image
            src={'/deskCoin-1.png'}
            alt={'deskCoin'}
            w={'328px'}
            h={'328px'}
          />
        </Box>
        <Text
          fontSize={'23px'}
          color={'white'}
          fontWeight={500}
          alignSelf={'flex-start'}
          zIndex={1}
        >
          Anlık Veriler
        </Text>
        <HStack gap={2} zIndex={1}>
          {item.map(ıtem => (
            <VStack
              key={ıtem.id}
              w={'288px'}
              h={'337px'}
              bg={'#505583'}
              rounded={10}
            >
              <HStack alignSelf={'flex-start'} px={3}>
                <Image src={ıtem.Image} alt={'ımg'} w={'24px'} h={'36px'} />
                <Text fontSize={'13px'} color={'#EAEAEA'} fontWeight={500}>
                  {ıtem.desc}
                </Text>
              </HStack>
              <Image src={ıtem.grafik} alt={'grafik'} w={'260px'} h={'142px'} />
              <Text
                fontSize={'58px'}
                fontWeight={300}
                color={'white'}
                alignSelf={'center'}
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
        </HStack>
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
