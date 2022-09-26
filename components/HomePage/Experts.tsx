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
export const Experts = () => {
  return (
    <VStack
      w={'full'}
      h={'1155px'}
      bgImage={'/experts-bg.png'}
      flexDirection={'column'}
      py={100}
    >
      <Container maxW={{ xl:'1200px',xxl:'1600px'}}>
        <VStack w={'full'} gap={50}>
          <Text
            fontSize={'23px'}
            color={'white'}
            fontWeight={500}
            alignSelf={'flex-start'}
          >
            Uzmanlarımız
          </Text>
          <SimpleGrid columns={4} spacing={'15px'} w={'full'}>
            {Item.map(ıtem => (
              <Box
                key={ıtem.key}
                w={'288px'}
                h={'408px'}
                bg={'#505583'}
                rounded={10}
                py={2}
              >
                <VStack gap={3}>
                  <Flex
                    bgImage={ıtem.Image}
                    bgSize={'cover'}
                    bgPos={'center'}
                    w={'256px'}
                    h={'156px'}
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
                      opacity={0.9}
                    >
                      <Text fontSize={'12px'} fontWeight={500}>
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
                  <Text
                    fontSize={'19px'}
                    fontWeight={500}
                    color={'white'}
                    alignSelf={'flex-start'}
                    px='5'
                  >
                    {ıtem.name}
                  </Text>
                  <Text
                    fontSize={'14px'}
                    fontWeight={400}
                    color={'#C4C4C4'}
                    alignSelf={'flex-start'}
                    px='5'
                  >
                    {ıtem.expert}
                  </Text>
                  <Text
                    fontSize={'14px'}
                    fontWeight={400}
                    color={'#C4C4C4'}
                    alignSelf={'flex-start'}
                    px='5'
                  >
                    {ıtem.description}
                  </Text>
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
                    <Text fontSize={'12px'} fontWeight={400} color={'white'}>
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
