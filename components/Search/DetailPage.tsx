import { WarningIcon } from '@chakra-ui/icons'
import {
  VStack,
  Flex,
  HStack,
  Image,
  Text,
  Icon,
  Divider
} from '@chakra-ui/react'
import React from 'react'

const DetailPage = () => {
  return (
    <Flex w={'full'} justifyContent={'space-between'} flexDirection={{base:"column",md:"row"}}>
      <VStack w={{base:"full",md:'693px'}} gap={5} >
        <HStack w={'full'} justifyContent={'space-between'}>
          <Text fontSize={'23px'} fontWeight={500} color={'#333333'}>
            Introduction
          </Text>
          <HStack color={'#56C568'}>
            <Icon as={WarningIcon} w={'24px'} h={'24px'} />
            <Text fontSize={'12px'} fontWeight={400}>
              Rehber
            </Text>
          </HStack>
        </HStack>
        <Divider />
        <Flex w={'full'} gap={5}>
          <VStack alignItems={'flex-start'}>
            <Image src={'/detail-1.png'} alt={'ımg'} w={{ base: "300px", md: '400px' }} h={{base:"150px",md:'300px'}} />
            <Text fontSize={'14px'} color={'#525252'} fontWeight={400}>
              This guide will show you how.
            </Text>
          </VStack>
          <Text
            fontSize={'14px'}
            fontWeight={400}
            color={'#333333'}
            alignSelf={'flex-start'}
          >
            You can choose to get messages that are sent to you from messaging
            apps that you dont have. You get these messages as notifications.
            You can reply from the notifications that show up on your phone.
          </Text>
        </Flex>
        <HStack w={{base:"full",md:'465px'}} h={'48px'} bg={'#E9FFEC'} alignSelf={'flex-start'}>
          <Image src={'/lamp-on.png'} alt={'lamp'} w={'24px'} h={'24px'} />
          <Text fontSize={'14px'} fontWeight={400} color={'#333333'}>
            Some of these steps work only on Android 8.0 and up.
          </Text>
        </HStack>
        <VStack alignItems={'flex-start'} gap={5} alignSelf={'flex-start'}>
          <Text fontSize={'19px'} fontWeight={500} color={'black'}>
            1 Preview Messages
          </Text>
          <Divider />
          <Text color={'#333333'} fontSize={'15px'} fontWeight={500}>
            Turn on app preview messages
          </Text>
          <Text color={'#333333'} fontSize={'14px'} fontWeight={500}>
            1. Swipe down from the top edge of your Android device`s screen to
            see the Notification shade.
          </Text>
          <Image src={'/detail-2.png'} alt={'ımg'} w={{base:"120px",md:'200px'}} h={{base:"150px",md:'300px'}} />
          <Text color={'#333333'} fontSize={'14px'} fontWeight={500}>
            1. Swipe down a second time for the full Quick Settings shade.
            Select the Settings icon near the top right.
          </Text>
          <Image src={'/detail-3.png'} alt={'ımg'} w={{base:"120px",md:'200px'}} h={{base:"150px",md:'300px'}} />
        </VStack>
      </VStack>
      {item.map(element => (
        <VStack alignSelf={{ base: "center", md: 'flex-start' }} w={{base:"full",md:'389px'}} gap={10} key={element.id} py={5}>
          <VStack alignSelf={{ base: "center", md: 'flex-start' }} >
            <Text
              fontSize={{base:"15px",md:'19px'}}
              color={'#333333'}
              fontWeight={500}
              alignSelf={{ base: "center", md: 'flex-start' }}
            >
              İçerik Bilgileri
            </Text>
            <VStack alignSelf={{ base: "center", md: 'flex-start' }} w={'full'}>
              <HStack color={'#333333'} alignSelf={{ base: "center", md: 'flex-start' }}>
                <Image src={'/pen1.png'} alt={'pen'} w={'24px'} h={'24px'} />
                <Text fontSize={'14px'} fontWeight={400}>
                  {element.writer}
                </Text>
              </HStack>
              <HStack color={'#333333'} alignSelf={{ base: "center", md: 'flex-start' }}>
                <Image src={'/book.png'} alt={'book'} w={'24px'} h={'24px'} />
                <Text fontSize={'14px'} fontWeight={400}>
                  {element.reading}
                </Text>
              </HStack>
              <HStack color={'#333333'} alignSelf={{ base: "center", md: 'flex-start' }}>
                <Image
                  src={'/calendar1.png'}
                  alt={'calendar'}
                  w={'24px'}
                  h={'24px'}
                />
                <Text fontSize={'14px'} fontWeight={400}>
                  {element.date}
                </Text>
              </HStack>
            </VStack>
          </VStack>
          <VStack alignSelf={{ base: "center", md: 'flex-start' }}>
            <Text
              alignSelf={{ base: "center", md: 'flex-start' }}
              fontSize={'19px'}
              color={'#333333'}
              fontWeight={500} display={{base:"none",md:"flex"}}
            >
              Bu içerik yardımcı oldu mu?
            </Text>
            <HStack alignSelf={{ base: "center", md: 'flex-start' }} display={{base:"none",md:"flex"}}>
              <HStack>
                <Image src={'/dislike.png'} alt={'ımg'} w={'24px'} h={'24px'} />
                <Text> Hayır</Text>
              </HStack>
              <HStack>
                <Image src={'/like.png'} alt={'ımg'} w={'24px'} h={'24px'} />
                <Text>Evet</Text>
              </HStack>
            </HStack>
          </VStack>
          <VStack gap={2} alignSelf={{ base: "center", md: 'flex-start' }}>
            <Text
              alignSelf={{ base: "center", md: 'flex-start' }}
              fontSize={{base:"15px",md:'19px'}}
              color={'#333333'}
              fontWeight={500}
            >
              Paylaş
            </Text>
            <HStack alignSelf={'flex-start'}>
              <Image
                src={'/facebook-soft.png'}
                alt={'facebook'}
                w={'24px'}
                h={'24px'}
              />
              <Image
                src={'/twitter-soft.png'}
                alt={'twitter'}
                w={'24px'}
                h={'24px'}
              />
              <Image
                src={'/whatsapp(1).png'}
                alt={'whatsapp'}
                w={'24px'}
                h={'24px'}
              />
              <Image src={'/link.png'} alt={'link'} w={'24px'} h={'24px'} />
            </HStack>
          </VStack>
        </VStack>
      ))}
    </Flex>
  )
}

export default DetailPage

interface itemProp {
  headName: string
  description: string
  writer: string
  reading: number
  date: string
  ımage: string
  id: number
}

const item: Array<itemProp> = [
  {
    headName: 'Airdrop nedir?',
    description:
      'Curve DAO Token (CRV), Livepeer (LPT) ve birkaç altcoin projesinde devasa balina satın alımlarına şahit oldu. Balinalar CRV’yi en çok kullanılan akıllı sözleşmeler listesinde de ilk sıralara çıkardı.',
    writer: 'Fatih Demirkan',
    reading: 1142,
    date: '16/12/2021 21:43',
    ımage: '/crypto1.png',
    id: 1
  }
]
