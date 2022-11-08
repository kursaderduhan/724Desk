import React, { memo } from 'react'
import {
  Flex,
  SimpleGrid,
  Text,
  Box,
  VStack,
  Image,
  HStack,
  Container
} from '@chakra-ui/react'
import Link from 'next/link'
export const Experts = () => {
  return (
    <VStack
      w={'100%'}
      h={'1155px'}
      bg={"#333862"}
      flexDirection={'column'}
      py={{base:"54px",lg:"120px"}}
    >
      <Container maxW={"1200px"}>
        <VStack w={'full'}>
          <Link href={'/Experts'}>
            <Text
              fontSize={'23px'}
              color={'white'}
              fontWeight={500}
              alignSelf={'flex-start'}
              cursor={'pointer'}
            >
              Uzmanlarımız
            </Text>
          </Link>
          <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={{ base: 1, lg: 10 }} w={'full'} py={{base:"41px",lg:"32px"}} >
            {Item.map(ıtem => (
              <Box
                key={ıtem.key}
                w={{ base: '160px', lg: '288px' }}
                h={{ base: '247px', lg: '408px' }}
                bg={'#505583'}
                rounded={10}
                py={2}
              >
                <VStack gap={3}>
                  <Flex
                    bgImage={ıtem.Image}
                    bgSize={'cover'}
                    bgPos={'center'}
                    w={{ base: '148px', lg: '256px' }}
                    h={{ base: '90px', lg: '156px' }}
                    alignItems={'flex-start'}
                    px={2}
                    justifyContent={'space-between'}
                    flexDirection={'column'}
                  >
                    <HStack
                      w={'80px'}
                      h={'30px'}
                      bg={'#F7FCFE'}
                      rounded={10}
                      justifyContent='center'
                      opacity={0.9} display={{base:"none",lg:"flex"}}
                    >
                      <Text fontSize={'12px'} fontWeight={500} >
                        {ıtem.online == true ? (
                          <span style={{ color: 'green' }}>Online</span>
                        ) : (
                          <span style={{ color: 'red' }}>Offline</span>
                        )}
                      </Text>
                    </HStack>
                    <HStack
                      w={'69px'}
                      h={'30px'}
                      bg={'#F7FCFE'}
                      justifyContent={'center'}
                      display={'flex'}
                      rounded={10}
                      opacity={0.9}
                    >
                      <Text fontSize={'12px'} color={'#2C4EC6'}>
                        {ıtem.sector}
                      </Text>
                    </HStack>
                  </Flex>
                  <VStack alignItems={"flex-start"} w={"full"} px={{base:3,lg:0}} >
                    <Text
                      fontSize={{ base: '15px', lg: '19px' }}
                      color={'white'}
                      alignSelf={'flex-start'}
                      px={{base:0,lg:5}} textStyle={"homePageText"}
                    >
                      {ıtem.name}
                    </Text>
                    <Text
                      fontSize={{ base: '12px', lg: '14px' }}
                      textStyle={"subText"}
                      color={'#C4C4C4'}
                      alignSelf={'flex-start'}
                      px={{base:0,lg:5}}
                    >
                      {ıtem.expert}
                    </Text>
                    <Text
                      color={'#C4C4C4'} textStyle={"subText"}
                      alignSelf={'flex-start'}
                      px='5'
                      display={{ base: 'none', lg: 'flex' }}
                    >
                      {ıtem.description}
                    </Text>
                    <Text
                      fontSize={'12px'}
                      color={'white'} textStyle={"subText"}
                      display={{ base: 'flex', lg: 'none' }}
                    >
                      {ıtem.language}
                    </Text>
                  </VStack>
                  <HStack w='full' px='5' justifyContent={'space-between'}>
                    <HStack alignItems={'flex-start'} display={'flex'}>
                      {ıtem.phone && (
                        <Image
                          src={ıtem.phone}
                          alt={'phone'}
                          w={'24px'}
                          h={'24px'}
                        />
                      )}
                      {ıtem.mail && (
                        <Image
                          src={ıtem.mail}
                          alt={'sms'}
                          w={'24px'}
                          h={'24px'}
                        />
                      )}
                      {ıtem.message && (
                        <Image
                          src={ıtem.message}
                          alt={'sms-2'}
                          w={'24px'}
                          h={'24px'}
                        />
                      )}
                      {ıtem.telegram && (
                        <Image
                          src={ıtem.telegram}
                          alt={'messenger'}
                          w={'24px'}
                          h={'24px'}
                        />
                      )}
                    </HStack>
                    <Text
                      fontSize={'12px'}
                      textStyle={"subText"}
                      color={'white'}
                      display={{ base: 'none', lg: 'flex' }}
                    >
                      {ıtem.language}
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </VStack>
  )
}

export default memo(Experts)

interface itemProps {
  Image: string
  online: boolean
  sector: string
  name: string
  expert: string
  description: string
  phone?: string
  mail?: string
  message?: string
  telegram?: string
  language: string
  key: number
}

const Item: Array<itemProps> = [
  {
    Image: '/pro-1.png',
    name: 'Leslie Alexander',
    online: true,
    sector: 'Yazılım',
    expert: 'Front-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    phone: '/phone.png',
    mail: '/sms.png',
    message: '/messages-2.png',
    telegram: '/messenger.png',
    language: 'English',
    key: 1
  },
  {
    Image: '/pro-2.png',
    name: 'Kristin Watson',
    online: true,
    sector: 'Yazılım',
    expert: 'Back-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    phone: '/phone.png',
    mail: '/sms.png',
    telegram: '/messenger.png',
    language: 'English,French',
    key: 2
  },
  {
    Image: '/pro-3.png',
    name: 'Darrell Steward',
    online: false,
    sector: 'Tasarım',
    expert: 'Front-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    message: '/messages-2.png',
    telegram: '/messenger.png',
    language: 'English',
    key: 3
  },
  {
    Image: '/pro-4.png',
    name: 'Eleanor Pena',
    online: true,
    sector: 'Analiz',
    expert: 'Back-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    phone: '/phone.png',
    message: '/messages-2.png',
    telegram: '/messenger.png',
    language: 'English, Turkish',
    key: 4
  },
  {
    Image: '/pro-1.png',
    name: 'Leslie Alexander',
    online: true,
    sector: 'Yazılım',
    expert: 'Front-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    phone: '/phone.png',
    mail: '/sms.png',
    message: '/messages-2.png',
    telegram: '/messenger.png',
    language: 'English',
    key: 5
  },
  {
    Image: '/pro-2.png',
    name: 'Kristin Watson',
    online: true,
    sector: 'Yazılım',
    expert: 'Back-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    mail: '/sms.png',
    telegram: '/messenger.png',
    language: 'English,Spanish',
    key: 6
  },
  {
    Image: '/pro-3.png',
    name: 'Darrell Steward',
    online: false,
    sector: 'Tasarım',
    expert: 'Front-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    message: '/messages-2.png',
    language: 'English',
    key: 7
  },
  {
    Image: '/pro-4.png',
    name: 'Eleanor Pena',
    online: true,
    sector: 'Analiz',
    expert: 'Back-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    phone: '/phone.png',
    telegram: '/messenger.png',
    language: 'English, Spanish',
    key: 8
  }
]
