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
  Icon,
  useMediaQuery
} from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'
import { HiOutlineExternalLink } from 'react-icons/hi'
import BurningMechanism from '@components/DeskToken/BurningMechanism'
import HowToEarn from '@components/DeskToken/HowToEarn'
import Footer from '@components/Footer/Footer'
import Layout from '@components/Layout/Layout'
const DeskToken = () => {
  const [mobileScreen] = useMediaQuery("(max-width:572px)")
  return (
    <Layout>
      <VStack overflow={'hidden'}>
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
          display={{ base: 'none', md: 'flex' }}
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
        <VStack py={{base:0,md:10}}>
          <Flex
            bg={'linear-gradient(98.25deg, #121A44 -1.61%, #701366 103.06%)'}
            w={{ base: 'full', md: '1200px' }}
            h={{ base: '603px', md: '449px' }}
            rounded={{base:0,md:20}}
            pos={'relative'}
            overflow={'visible'}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Box pos={'absolute'}>
              <Image
                src={'/deskToken-bg1.png'}
                alt={'desktoken'}
                w={{ base: '350px', md: '472px' }}
                h={{ base: '322px', md: '442px' }}
              />
            </Box>
            <VStack h={'full'} justifyContent={'space-evenly'} px={{base:2,md:20}}>
              <VStack alignItems={'flex-start'} w={'full'}>
                <Text fontSize={{base:"28px",md:'46px'}} color={'white'} fontWeight={500}>
                  DESK Token Nedir?
                </Text>
                <Text
                  fontSize={'14px'}
                  color={'white'}
                  fontWeight={400}
                  opacity={0.7}
                >
                  Seçeneklerimiz arasında size en uygun olan hizmet paketini
                  seçip hemen başlayabilirsiniz!
                </Text>
              </VStack>
              <Flex
                flexDirection={{ base: 'column', md: 'row' }}
                w={'full'}
                alignItems={'flex-start'}
                gap={2}
              >
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
              </Flex>
            </VStack>
            <Image
              src={'/deskTokens.png'}
              alt='deskToken'
              w={{ base: '226px', md: '392px' }}
              h={{ base: '322px', md: '457px' }}
              alignSelf={'flex-end'}
            />
          </Flex>
          <Flex
            w={{ base: 'full', md: '1200px' }}
            h={{ base: 'full', md: '517px' }}
            border={{ base: 'none', md: '2px solid' }}
            borderColor={'linear-gradient(#76336B %100, #76336B %0)'}
            rounded={{base:0,md:20}}
            justifyContent={'space-between'}
            px={{ base: 0, md: 10 }}
            alignItems={'center'}
            flexDirection={{ base: 'column', md: 'row' }}
            gap={5}
          >
            <Image src='/tokenomics.png' alt={''} w={'250px'} h={'250px'} />
            <VStack px={5}>
              {item.map(ıtem => (
                <HStack key={ıtem.id}>
                  <Circle
                    size={'16px'}
                    bg={ıtem.color}
                    alignSelf={'flex-start'}
                    mt={1}
                  />
                  <VStack
                    alignItems={'flex-start'}
                    w={{ base: 'full', md: '366px' }}
                  >
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
              w={{ base: 'full', md: '389px' }}
              h={'421px'}
              rounded={{base:0,md:20}}
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
                    )}
                    {tokens.rightDesc}
                    {tokens.icon && (
                      <Icon as={tokens.icon} w={'18px'} h={'18px'} />
                    )}
                  </Text>
                </HStack>
              ))}
            </HStack>
          </Flex>
        </VStack>
        <BurningMechanism />
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <HowToEarn />
        </Container>
        <VStack
          w={'full'}
          h={{base:"full",md:'1476px'}}
          bg={'#212842'}
          justifyContent={'space-between'}
        >
          <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
            <VStack h={'full'} pt={10} gap={10}>
              <Flex
                flexDirection={{ base: 'column', md: 'row' }}
                alignItems={'center'}
                w={'full'}
                justifyContent={'space-around'} gap={5}
              >
                <Image
                  src={'/deskToken.png'}
                  alt={'deskToken'}
                  w={'186px'}
                  h={'186px'}
                />
                <VStack alignItems={'flex-start'}>
                  <Text
                    fontSize={{ base: '23px', md: '33px' }}
                    fontWeight={500}
                    color={'white'}
                  >
                    Want to integrate DESK token into your platform?
                  </Text>
                  <Text
                    fontSize={'14px'}
                    fontWeight={400}
                    color={'#C4C4C4'}
                    letterSpacing={'0.5px'}
                    w={{ base: 'full', md: '694px' }}
                  >
                    Get in touch with us via support@724desk.org and the team
                    will carefully analyze the possibility of connecting your
                    product with the user base of more than 46,000 DESK holders.
                    The best products based on our initial review will be added
                    to the list of DESK Token Opportunities and will get the
                    marketing boost in the form of promotion across our social
                    media profiles accounting for more than 130,000 users.
                  </Text>
                </VStack>
              </Flex>
              <VStack gap={10}>
                <Text
                  fontSize={{base:"24px",md:'33px'}}
                  fontWeight={500}
                  color={'white'}
                  textAlign={'center'}
                >
                  Become a holder of the token that supports {mobileScreen ? null :  <br /> }
                  the 724Desk ecosystem
                </Text>
                <Button variant={'globalButton'} gap={2} w={'261px'}>
                  <Image
                    src={'/deskToken.png'}
                    alt={'desk'}
                    w={'24px'}
                    h={'24px'}
                  />
                  DESK Token Satın Al
                </Button>
              </VStack>
              <HStack
                w={'full'}
                justifyContent={'center'}
                pt={20}
                gap={5}
                h={'350px'}
              >
                <Image
                  src={'/dToken-1.png'}
                  alt={'ımg'}
                  w={'112px'}
                  h={'112px'}
                  alignSelf={'flex-end'}
                  display={{ base: 'none', md: 'flex' }}
                />
                <Image
                  src={'/dToken-2.png'}
                  alt={'ımg'}
                  w={'66px'}
                  h={'66px'}
                />
                <Image
                  src={'/dToken-3.png'}
                  alt={'ımg'}
                  w={'195px'}
                  h={'195px'}
                  alignSelf={'flex-start'}
                />
                <Image
                  src={'/dToken-4.png'}
                  alt={'ımg'}
                  w={'73px'}
                  h={'73px'}
                  alignSelf={'flex-end'}
                />
                <Image
                  src={'/dToken-5.png'}
                  alt={'ımg'}
                  w={'112px'}
                  h={'112px'}
                  alignSelf={'center'}
                  bottom={25}
                  display={{ base: 'none', md: 'flex' }}
                />
                <Image
                  src={'/dToken-2.png'}
                  alt={'ımg'}
                  w={'66px'}
                  h={'66px'}
                  alignSelf={'center'}
                  display={{ base: 'none', md: 'flex' }}
                />
              </HStack>
            </VStack>
          </Container>
          <Footer />
        </VStack>
      </VStack>
    </Layout>
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
