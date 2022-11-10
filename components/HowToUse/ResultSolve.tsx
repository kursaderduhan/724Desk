import React, { memo } from 'react'
import {
  HStack,
  Image,
  Text,
  Box,
  VStack,
  Flex,
  Button
} from '@chakra-ui/react'

export const ResultSolve = () => {
  return (
    <Flex
      flexDirection={{ base: 'column', lg: 'row' }}
      alignItems={'center'}
      w={'full'}
      justifyContent={'space-between'}
      py={{base:"16px", lg:"42px"}}
    >
      <Box display={{ base: 'flex', lg: 'none' }}>
        <Image alt={'hand'} src={'/hpHandPhone.png'} w={'266px'} h={'342px'} />
      </Box>
      <VStack alignItems={'flex-start'} w={{ base: '343px', lg: '450px' }}>
        <Text
          fontSize={'23px'}
          fontWeight={500}
          color={'#525252'}
          display={{ base: 'flex', lg: 'none' }}
        >
          Çözüm Süreci
        </Text>
        {result.map(result => (
          <Flex key={result.key} pt={"59px"} gap={"22px"}>
            <Image
              src={result.Image}
              alt={'ımg'}
              w={'54px'}
              h={'54px'}
              alignSelf={'flex-start'}
            />
            <VStack alignItems={'flex-start'}>
              <Text textStyle={"smallText"} color={'#666666'}>
                {result.area}
              </Text>
              <Text textStyle={"deskTokenHead"} color={'black'}>
                {result.textHead}
              </Text>
              <Text color={'#666666'} textStyle={"categoriesText"} maxW={"421px"} pt={"6px"}>
                {result.textDown}
              </Text>
            </VStack>
          </Flex>
        ))}
      </VStack>
      <Flex gap={"16px"} display={{base:"flex",lg:"none"}} pt={"42px"}>
        <Button variant={'globalButton'} w={'164px'}>
          Hemen Başla
        </Button>
        <Button w={'164px'}>Videolu Çözüm</Button>
      </Flex>
      <Box display={{ base: 'none', lg: 'flex' }}>
        <Image alt={'hand'} src={'/hpHandPhone.png'} w={'493px'} h={'634px'} />
      </Box>
    </Flex>
  )
}

export default memo(ResultSolve)

interface resultProp {
  Image: string
  area: string
  textHead: string
  textDown: string
  key: string
}

const result: Array<resultProp> = [
  {
    Image: '/edit.png',
    area: '1.Adım',
    textHead: 'Problemini Tanımla',
    textDown: 'Probleminizi birkaç kelime ile tanımlayın.',
    key: 'one'
  },
  {
    Image: '/message-tick.png',
    area: '2.Adım',
    textHead: 'Problemini Kontrol Et',
    textDown:
      'Yaşadığınız problemin yayınlamış olduğumuz makaleler içinde olup olmadığını kontrol edin.',
    key: 'two'
  },
  {
    Image: '/task-square.png',
    area: '3.Adım',
    textHead: 'Çözüm Formunu Doldur',
    textDown:
      'Hâlâ çözüme ulaşamadıysanız size en iyi şekilde yardımcı olabilmemiz için çözüm formumuzu eksiksiz olarak doldurun.',
    key: 'three'
  },
  {
    Image: '/card-tick.png',
    area: '4.Adım',
    textHead: 'Servis Ücretini Tamamla',
    textDown:
      'Size uygun olan hizmet paketini seçin, ödemeyi tamamlayın ve çözüm aşamasına geçin.',
    key: 'four'
  }
]
