import React,{memo} from 'react'
import {
  Flex,
  HStack,
  VStack,
  Text,
  Container,
  Image,
  Box,
  SimpleGrid
} from '@chakra-ui/react'
const HowToEarn = () => {
  return (
    <VStack w={'full'} py={20}>
      <Flex flexDirection={{base:"column",md:"row"}} alignItems={"center"} w={"full"} justifyContent={"space-between"}>
        <VStack w={{ base: "full", md: '437px' }} h={{ base: "485px", md: '621px' }}>
          <Box
            w={{base:"full",md:'376px'}}
            h={{base:"485px",md:'534px'}}
            bg={'linear-gradient(180deg, #F3DC5F 0%, #F5A937 100%)'}
            alignSelf={'flex-start'}
            mt={10}
            overflow={'visible'}
            pos={'relative'} rounded={20}
          >
            <Image
              src={'/deskToken-3.png'}
              alt={'ımg'}
              pos={'absolute'}
              left={10} h={{base:"450",md:"full"}}
            />
          </Box>
        </VStack>
        <VStack alignItems={'flex-start'}>
          <Text fontSize={{base:"23px",md:'33px'}} fontWeight={500} color={'black'}>
            How to earn DESK Token?
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={'#525252'}>
            DESK will continue decreasing the total supply of BSW tokens with
            the help of a weekly <br /> burning mechanism, which should in turn
            increase the value of the token in the long run.
          </Text>
          {item.map(ıtem => (
            <HStack key={ıtem.id}>
              <Flex
                w={'54px'}
                h={'54px'}
                rounded={'13px'}
                bg={ıtem.color}
                alignSelf={'flex-start'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Image src={ıtem.ımage} alt={'ımg'} w={'32px'} h={'32px'} />
              </Flex>
              <VStack alignItems={'flex-start'}>
                <Text fontSize={'19px'} fontWeight={500} color={'black'}>
                  {ıtem.headName}
                </Text>
                <Text
                  w={{base:"full",md:'623px'}}
                  fontSize={'14px'}
                  fontWeight={400}
                  color={'#666666'}
                >
                  {ıtem.desc}
                </Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </Flex>
      <Text
        fontSize={'23px'}
        color={'#333333'}
        fontWeight={500}
        alignSelf={'flex-start'}
      >
        DESK Token Opportunities
      </Text>
      <SimpleGrid columns={{base:1,md:3}} spacing={5}>
        {opp.map(opper => (
          <VStack
            w={{base:"343px",md:'376px'}}
            h={{base:"300px",md:'376px'}}
            key={opper.id}
            bg={'linear-gradient(180deg, #76336B 0%, #500264 100%)'}
            rounded={20}
            justifyContent={'center'}
            gap={5}
            px={15}
          >
            <Image src={opper.ımage} alt={'ımg'} w={'116px'} h={'116px'} />
            <Text fontSize={'23px'} fontWeight={500} color={'white'}>
              {opper.headName}
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={400}
              color={'white'}
              opacity={0.7}
              textAlign={'center'}
              px={10}
            >
              {opper.desc}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default memo(HowToEarn)

interface itemProps {
  id: number
  color: string
  ımage: string
  headName: string
  desc: string
}

const item: Array<itemProps> = [
  {
    id: 1,
    color: 'linear-gradient(180deg, #FFDEBC 0%, #DFAB73 100%)',
    ımage: '/medal-star.png',
    headName:
      'Destek uzmanımız olun, hizmetiniz karşılığında Desk Token kazanın!',
    desc:
      'Destek uzmanlarımız müşterilerimize verdiği hizmetler karşılığında ödemelerini Desk Token ile alarak Token’imizi biriktirebilirler.'
  },
  {
    id: 1,
    color: 'linear-gradient(180deg, #BCF7FF 0%, #7DCED9 100%)',
    ımage: '/coin.png',
    headName: 'Stake yaparak daha fazla Desk Token elde edin!',
    desc:
      'Elinizdeki Desk Token’leri yatırım havuzlarımıza koyarak projenin işleyişine destek olup, gelirlerimizden yüksek oranda kâr payı elde edebilirsiniz.'
  },
  {
    id: 1,
    color: 'linear-gradient(180deg, #EECFFD 0%, #B680CF 100%)',
    ımage: '/profile-tick.png',
    headName:
      'Platformumuza referans olarak müşteri kazandırıp Desk Token kazanın! ',
    desc:
      'Platformumuza yeni müşteriler kazandırarak yapacakları alışverişlerden Token’imizi kazanabilirsiniz.'
  },
  {
    id: 1,
    color: 'linear-gradient(180deg, #BCFFCB 0%, #80D793 100%)',
    ımage: '/card-pos.png',
    headName: 'Platformumuz üzerinde alışveriş yaparak Desk Token kazanın!',
    desc:
      'Tüm alışverişlerde alışveriş tutarınız oranında (%?) token kazanarak gelir oluşturabilirsiniz.'
  },
  {
    id: 1,
    color: 'linear-gradient(180deg, #FFBCBC 0%, #D95F5F 100%)',
    ımage: '/star-2.png',
    headName: 'Promosyonlarımızı takip ederek Desk Token kazanın!',
    desc:
      'Platform olarak daha fazla kişiye ulaşmak için birçok aktivitemiz bulunmaktadır. Bu aktivitelerde Desk Token ödüllerimiz bulunmaktadır, bu ödüllerden kazanarak gelir elde edebilirsiniz.'
  }
]

interface oppProps {
  id: number
  ımage: string
  headName: string
  desc: string
}
const opp: Array<oppProps> = [
  {
    id: 1,
    ımage: '/cup.png',
    headName: '724DESK Launchpools',
    desc:
      'Stake your DESK tokens in DESK Launchpools and earn other tokens for FREE.'
  },
  {
    id: 2,
    ımage: '/tag-2.png',
    headName: 'Liquidity provider fee',
    desc:
      'Add DESK token along with other tokens to the liquidity pools on Biswap and receive 50% from every transaction fee occurring on the platform.'
  },
  {
    id: 3,
    ımage: '/empty-wallet.png',
    headName: '724DESK Farms',
    desc:
      'Stake your Liquidity Provider tokens in Biswap Farms pairs and receive BSW tokens in return.'
  },
  {
    id: 4,
    ımage: '/favorite-chart.png',
    headName: 'I - Gaming',
    desc:
      'Play your favorite games on the #1 i-gaming platform BetFury using the DESK token.'
  },
  {
    id: 5,
    ımage: '/smart-home.png',
    headName: 'Referral Commission',
    desc:
      'Receive 5% from your friends’ earnings in Farms & Launchpools in the form of DESK tokens.'
  },
  {
    id: 6,
    ımage: '/card-coin.png',
    headName: 'Trading',
    desc:
      'Easily trade DESK token on the platform with the lowest transaction fees in the DeFi space.'
  }
]
