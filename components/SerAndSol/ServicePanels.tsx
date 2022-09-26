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
      bg={'#E5E5E5'}
      flexDirection={'column'}
      py={100}
    >
      <Container maxW={{ xl:'1200px',xxl:'1600px'}} h={'full'} gap={10}>
        <VStack w={'full'} alignItems={'flex-start'} gap={10}>
          <Flex flexDirection={'column'}>
            <Text fontWeight={500} fontSize={'23px'} color={'#525252'}>
              Hizmet Paketleri
            </Text>
            <Text fontWeight={400} fontSize={'14px'} color={'#959595'}>
              Hizmet almak isteyen müşterilerimiz, tek seferlik, 6 aylık, yıllık
              ve premium <br /> paketlerimizden ihtiyaç duyduğunu seçerek işlem
              sürecini başlatabilir.
            </Text>
          </Flex>
          <HStack>
            {Item.map(item => (
              <HStack w={'389px'} h={'181px'} key={item.key} bg={'#FFFFFF'}>
                <HStack alignItems={'flex-start'} px={10}>
                  <Image src={item.Image} alt={'ımg'} w={'82px'} h={'82px'} />
                  <VStack fontWeight={400} alignItems={'flex-start'}>
                    <Text fontSize={'33px'} color={'#FFA649'}>
                      {item.HeadName}
                    </Text>
                    <Text fontSize={'14px'} color={'#959595'}>
                      {item.Description}
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
            ))}
          </HStack>
          <Button
            bg={'transparent'}
            color={'#F27C00'}
            border={'1px solid'}
            borderColor={'#F27C00'}
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
