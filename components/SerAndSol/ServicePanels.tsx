import React, { memo } from 'react'
import {
  Flex,
  HStack,
  Text,
  Image,
  VStack,
  Container,
  Button
} from '@chakra-ui/react'
export const ServicePanels = () => {
  return (
    <Flex
      w={'full'}
      h={'full'}
      alignItems={'flex-start'}
      bg={'#F7FCFE'}
      flexDirection={'column'}
      pt={"150px"} pb={"132px"}
    >
      <Container maxW={"1200px"}>
        <VStack w={'full'} alignItems={'flex-start'}>
          <Flex flexDirection={'column'}>
            <Text textStyle={"deskTokenHead"} color={'#525252'}>
              Hizmet Paketleri
            </Text>
            <Text textStyle={"subText"} color={'#959595'} maxW={"608px"} pt={"12px"}>
              Hizmet almak isteyen müşterilerimiz, tek seferlik, 6 aylık, yıllık
              ve premium paketlerimizden ihtiyaç duyduğunu seçerek işlem
              sürecini başlatabilir.
            </Text>
          </Flex>
          <HStack pt={"42px"} gap={"16px"}>
            {Item.map(item => (
              <HStack w={'389px'} h={'181px'} key={item.key} bg={'#FFFFFF'} borderRadius={"16px"}>
                <HStack alignItems={'flex-start'} py={"32px"} pl={"33px"}>
                  <Image src={item.Image} alt={'ımg'} w={'82px'} h={'82px'} />
                  <VStack fontWeight={400} alignItems={'flex-start'}>
                    <Text color={'#FFA649'} textStyle={"bigText"}>
                      {item.HeadName}
                    </Text>
                    <Text textStyle={"subText"} color={'#959595'} pt={"4px"} maxW={"244px"}>
                      {item.Description}
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
            ))}
          </HStack>
          <Button
            bg={'transparent'} top={"24px"} fontSize={"13px"} lineHeight={"20px"} letterSpacing={"0.5px"} fontWeight={500}
            color={'#F27C00'} w={"195px"} h={"36px"}
            border={'1px solid'} borderRadius={"5px"}
            borderColor={'#F27C00'} _hover={{opacity:0.8}}
          >
            Daha Fazla Bilgi
          </Button>
        </VStack>
      </Container>
    </Flex>
  )
}

export default memo(ServicePanels)

interface itemProps {
  Image: string
  HeadName: string
  Description: string
  key: number
}

const Item: Array<itemProps> = [
  {
    Image: '/timer-start.png',
    HeadName: 'Tek Seferlik',
    Description:
      'Herhangi bir probleminizi anlık olarak çözdürebildiğiniz paketimiz.',
    key: 1
  },
  {
    Image: '/calendar.png',
    HeadName: '6 Aylık',
    Description:
      'Her türlü problemlerinize 6 ay boyunca çözüm bulabileceğiniz paketimiz.',
    key: 2
  },
  {
    Image: '/calendar-1.png',
    HeadName: 'Yıllık',
    Description:
      '1 yıl boyunca uzmanlarımızdan destek alabileceğiniz yıllık paketimiz.',
    key: 3
  }
]
