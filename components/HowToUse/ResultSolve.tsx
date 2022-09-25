import React, { memo } from 'react'
import { HStack, Image, Text, Box, VStack } from '@chakra-ui/react'

export const ResultSolve = () => {
  return (
    <HStack w={'full'} justifyContent={'space-between'} py={50}>
      <VStack alignItems={'flex-start'} w={'450px'}>
        {result.map(result => (
          <HStack key={result.key}>
            <Image
              src={result.Image}
              alt={'ımg'}
              w={'43px'}
              h={'43px'}
              alignSelf={'flex-start'}
            />
            <VStack alignItems={'flex-start'}>
              <Text fontSize={'10px'} fontWeight={400} color={'#666666'}>
                {result.area}
              </Text>
              <Text fontSize={'23px'} fontWeight={500} color={'black'}>
                {result.textHead}
              </Text>
              <Text fontSize={'12px'} fontWeight={400} color={'#666666'}>
                {result.textDown}
              </Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
      <Box>
        <Image alt={'hand'} src={'/hpHandPhone.png'} w={'493px'} h={'634px'} />
      </Box>
    </HStack>
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
