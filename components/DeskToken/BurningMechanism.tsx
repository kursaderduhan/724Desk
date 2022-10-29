import React from 'react'
import {
  VStack,
  HStack,
  Flex,
  Image,
  Text,
  Button,
  Container
} from '@chakra-ui/react'
const BurningMechanism = () => {
  return (
    <VStack w={'full'} h={{base:"1406px",md:'943px'}} bg={'#212842'} py={{base:10,md:100}} >
      <Container maxW={'1200px'}>
        <VStack gap={10}>
        <Text color={'white'} fontSize={'23px'} fontWeight={500}>
          DESK Token Burning Mechanism
        </Text>
        <Text
          textAlign={'center'}
          fontSize={'14px'}
          fontWeight={400}
          color={'#C4C4C4'}
        >
          724desk will continue decreasing the total supply of BSW tokens with
          the help of a weekly burning <br /> mechanism, which should in turn
          increase the value of the token in the long run.
        </Text>
        <Flex gap={10} flexDirection={{base:"column",md:"row"}}>
          <VStack
            flexDirection={'column'}
            bg={'linear-gradient(180deg, #647BC7 0%, #364062 100%)'}
            rounded={20}
              w={{base:"full",md:'389px'}}
              h={'482px'}
            py={10}
            gap={5}
          >
            <Image
              src={'/totalSupply.png'}
              alt={'totalSupply'}
              w={'210px'}
              h={'210px'}
            />
            <Text
              gap={2}
              fontSize={'15px'}
              fontWeight={500}
              color={'white'}
              display={'flex'}
            >
              <Image src={'/fire.png'} alt={'fire'} w={'24px'} h={'24px'} />
              Burned
            </Text>
            <Text fontSize={'23px'} fontWeight={500} color={'white'}>
              21 061 298
            </Text>
            <Button variant={'globalButton'} w={'251px'} fontSize={'15px'}>
              Check Burning History
            </Button>
          </VStack>
          <VStack gap={20} justifyContent={'center'}>
            <HStack>
              <Flex
                bg={'#F73A5D'}
                w={'54px'}
                h={'54px'}
                rounded={13}
                alignSelf={'flex-start'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Image
                  src={'/rotate.png'}
                  alt={'rotate'}
                  w={'42px'}
                  h={'42px'}
                />
              </Flex>
              <VStack alignItems={'flex-start'}>
                <Text fontSize={'15px'} fontWeight={500} color={'white'}>
                  50% from trading fees
                </Text>
                <Text
                  fontSize={'15px'}
                  fontWeight={400}
                  color={'#C4C4C4'}
                  w={'306px'}
                >
                  50% from every transaction on the 724Desk platform are used
                  for purchasing BSW tokens from the market and burning them.
                </Text>
              </VStack>
            </HStack>
            <HStack>
              <Flex
                bg={'#DFA432'}
                w={'54px'}
                h={'54px'}
                rounded={13}
                alignSelf={'flex-start'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Image
                  src={'/status-up.png'}
                  alt={'rotate'}
                  w={'42px'}
                  h={'42px'}
                />
              </Flex>
              <VStack alignItems={'flex-start'}>
                <Text fontSize={'15px'} fontWeight={500} color={'white'}>
                  Performance Fee 1.99%
                </Text>
                <Text
                  fontSize={'15px'}
                  fontWeight={400}
                  color={'#C4C4C4'}
                  w={'306px'}
                >
                  Subtracted automatically from each harvest in the BSW Auto
                  Compound pool and burned on a weekly basis.
                </Text>
              </VStack>
            </HStack>
          </VStack>
          <VStack gap={20} justifyContent={'center'}>
            <HStack>
              <Flex
                bg={'#1CAE7A'}
                w={'54px'}
                h={'54px'}
                rounded={13}
                alignSelf={'flex-start'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Image
                  src={'/user-add.png'}
                  alt={'rotate'}
                  w={'42px'}
                  h={'42px'}
                />
              </Flex>
              <VStack alignItems={'flex-start'}>
                <Text fontSize={'15px'} fontWeight={500} color={'white'}>
                  Unregistered Referrals
                </Text>
                <Text
                  fontSize={'15px'}
                  fontWeight={400}
                  color={'#C4C4C4'}
                  w={'316px'}
                >
                  All the rewards coming from the accounts with no referrers are
                  used for weekly BSW token burning.
                </Text>
              </VStack>
            </HStack>
            <HStack>
              <Flex
                bg={'#A23CF2'}
                w={'54px'}
                h={'54px'}
                rounded={13}
                alignSelf={'flex-start'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Image
                  src={'/ticket-discount.png'}
                  alt={'rotate'}
                  w={'42px'}
                  h={'42px'}
                />
              </Flex>
              <VStack alignItems={'flex-start'}>
                <Text fontSize={'15px'} fontWeight={500} color={'white'}>
                  13% from Lottery tickets
                </Text>
                <Text
                  fontSize={'15px'}
                  fontWeight={400}
                  color={'#C4C4C4'}
                  w={'316px'}
                >
                  13% from every lottery ticket are accumulated on a separate
                  wallet and burned once a week.
                </Text>
              </VStack>
            </HStack>
          </VStack>
          </Flex>
          </VStack>
      </Container>
    </VStack>
  )
}

export default BurningMechanism
