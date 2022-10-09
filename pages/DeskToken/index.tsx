import React, { memo } from 'react'
import {
  HStack,
  VStack,
  Image,
  Container,
  Text,
  Flex,
  Box,
  Button,
  Circle,
  Icon
} from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'
import { HiOutlineExternalLink } from 'react-icons/hi'
const DeskToken = () => {
  return (
    <VStack>
      <HStack
        h={'196px'}
        bg={'#E5EDF4'}
        flexDirection={'column'}
        alignSelf={'flex-end'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        gap={5}
        py={10}
        w={'full'}
      >
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Desk Token
          </Text>
          <Text fontSize={'12px'} fontWeight={'400'} color={'#959595'}>
            Projemizin tokeni olan DESK Token’i inceleyin.
          </Text>
        </Container>
      </HStack>
      <VStack py={10}>
        <Flex
          bg={'linear-gradient(98.25deg, #121A44 -1.61%, #701366 103.06%)'}
          w={'1200px'}
          h={'449px'}
          rounded={20}
          pos={'relative'}
          overflow={'visible'}
        >
          <Box pos={'absolute'}>
            <Image
              src={'/deskToken-bg1.png'}
              alt={'desktoken'}
              w={'472px'}
              h={'442px'}
            />{' '}
          </Box>
          <VStack h={'full'} justifyContent={'space-evenly'} px={20}>
            <VStack alignItems={'flex-start'} w={'full'}>
              <Text fontSize={'46px'} color={'white'} fontWeight={500}>
                DESK Token Nedir?
              </Text>
              <Text
                fontSize={'14px'}
                color={'white'}
                fontWeight={400}
                opacity={0.7}
              >
                Seçeneklerimiz arasında size en uygun olan hizmet paketini seçip{' '}
                <br /> hemen başlayabilirsiniz!
              </Text>
            </VStack>
            <HStack w={'full'} alignItems={'flex-start'}>
              <Button
                variant={'globalButton'}
                w={'261px'}
                fontSize={'15px'}
                gap={2}
              >
                <Image
                  src={'/deskToken.png'}
                  alt={'deskToken'}
                  w={'24px'}
                  h={'24px'}
                />
                Desk Token Satın Al
              </Button>
              <Button color={'black'} opacity={0.1} rounded={5} w={'194px'}>
                Desk Token Birleştir
              </Button>
            </HStack>
          </VStack>
          <Image
            src={'/deskTokens.png'}
            alt='deskToken'
            w={'392px'}
            h={'457px'}
          />
        </Flex>
        <HStack
          w={'1200px'}
          h={'517px'}
          border={'2px solid'}
          borderColor={'linear-gradient(#76336B %100, #76336B %0)'}
          rounded={20}
          justifyContent={'space-between'}
          px={10}
        >
          <Image src='/tokenomics.png' alt={''} w={'250px'} h={'250px'} />
          <VStack>
            {item.map(ıtem => (
              <HStack key={ıtem.id}>
                <Circle
                  size={'16px'}
                  bg={ıtem.color}
                  alignSelf={'flex-start'}
                />
                <VStack alignItems={'flex-start'} w={'366px'}>
                  <Text fontSize={'15px'} color={ıtem.color} fontWeight={500}>
                    {ıtem.number}
                  </Text>
                  <Text fontSize={'13px'} color={' #333333'} fontWeight={500}>
                    {ıtem.headText}
                  </Text>
                  <Text fontSize={'10px'} color={'#666666'} fontWeight={400}>
                    {ıtem.desc}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
          <HStack
            w={'389px'}
            h={'421px'}
            rounded={20}
            bg={'linear-gradient(180deg, #76336B 0%, #500264 100%)'}
            alignItems={'flex-start'}
            px={10}
            flexDirection={'column'}
            justifyContent={'center'}
            gap={5}
          >
            <Text color={'white'} fontSize={'19px'} fontWeight={500}>
              DESK Token Metrics
            </Text>
            {token.map(tokens => (
              <HStack
                key={tokens.id}
                w={'full'}
                justifyContent={'space-between'}
                alignItems={'flex-start'}
              >
                <Text
                  fontSize={'12px'}
                  color={'white'}
                  fontWeight={400}
                  letterSpacing={'0.25px'}
                >
                  {tokens.leftHead}
                </Text>
                <Text
                  fontSize={'15px'}
                  color={'white'}
                  fontWeight={500}
                  display={'flex'}
                  gap={2}
                  alignItems={'center'}
                >
                  {tokens.ımage && (
                    <Image
                      src={tokens.ımage}
                      alt={'ımg'}
                      w={'24px'}
                      h={'24px'}
                    />
                  )}{' '}
                  {tokens.rightDesc}
                  {tokens.icon && (
                    <Icon as={tokens.icon} w={'18px'} h={'18px'} />
                  )}{' '}
                </Text>
              </HStack>
            ))}
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default memo(DeskToken)

interface itemProps {
  id: number
  color: string
  number: string
  headText: string
  desc: string
}

const item: Array<itemProps> = [
  {
    id: 1,
    color: '#F27C00',
    number: '80.7%',
    headText: 'Farms/Launchpools',
    desc:
      'The amount of tokens you earn each daily is proportional to the amount of tokens you have subscribed to the pool vs the total...'
  },
  {
    id: 2,
    color: '#8904DB',
    number: '4.3%',
    headText: 'Referral Program',
    desc:
      'The amount of tokens you earn each daily is proportional to the amount of tokens you have subscribed to the pool vs the total...'
  },
  {
    id: 3,
    color: '#F9C74F',
    number: '9%',
    headText: 'Team',
    desc:
      'The amount of tokens you earn each daily is proportional to the amount of tokens you have subscribed to the pool vs the total...'
  },
  {
    id: 4,
    color: '#F94144',
    number: '1%',
    headText: 'SAFU',
    desc:
      'The amount of tokens you earn each daily is proportional to the amount of tokens you have subscribed to the pool vs the total...'
  },
  {
    id: 5,
    color: '#0DA300',
    number: '5%',
    headText: 'Investment Fund',
    desc:
      'The amount of tokens you earn each daily is proportional to the amount of tokens you have subscribed to the pool vs the total...'
  }
]

interface tokenProps {
  id: number
  leftHead: string
  rightDesc: string
  ımage?: string
  icon?: IconType
}
const token: Array<tokenProps> = [
  { id: 1, leftHead: 'Price:', rightDesc: '$0.54' },
  {
    id: 1,
    leftHead: 'Ticker Symbol:',
    rightDesc: 'DESK',
    ımage: '/deskToken.png'
  },
  { id: 1, leftHead: 'Chain:', rightDesc: 'BSC(BEP-20)', ımage: '/bnb.png' },
  {
    id: 1,
    leftHead: 'Contract Address:',
    rightDesc: '0x86...5453',
    icon: HiOutlineExternalLink
  },
  { id: 1, leftHead: 'Max Supply:', rightDesc: '700 000 000' },
  { id: 1, leftHead: 'Total Supply:', rightDesc: '229 284 526' },
  { id: 1, leftHead: 'Circulation Supply:', rightDesc: '209 716 965' },
  { id: 1, leftHead: 'Burned:', rightDesc: '21 061 298' }
]
