import { HStack, VStack, Image, Text,Flex } from '@chakra-ui/react'
import React, { memo } from 'react'

export const Solve = () => {
  return (
    <VStack w={'full'} py="100" pb={400}>
      {result.map(result => (
        <Flex w={'full'} justifyContent={'space-between'} key={result.key} >
          <HStack alignSelf={"flex-start"}>
            <Image src={result.Image} alt={'ımg'} w={'43px'} h={'43px'} alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text fontSize={'10px'} fontWeight={400} color={'#666666'}>
                {result.area}
              </Text>
              <Text fontSize={'23px'} fontWeight={500} color={'black'}>
                {result.textHead}
              </Text>
              <Text fontSize={'14px'} fontWeight={400} color={'#666666'} w={"522px"}>
                {result.textDown}
              </Text>
            </VStack>
          </HStack>
              <Image src={result.ImageRight} alt={'ımg'} w={'491px'} h={'364px'} />
        </Flex>
      ))}
    </VStack>
  )
}

export default memo(Solve)

interface resultProp {
  Image: string
  area: string
  textHead: string
  textDown: string
  ImageRight: string
  key: string
}

const result: Array<resultProp> = [
  {
    Image: '/edit.png',
    area: '1.Adım',
    textHead: 'Problemini Tanımla',
    textDown:
      'Litecoin, 2011 yılında eski bir Google çalışanı Charlie Lee tarafından geliştirilmiştir. Temelde Bitcoin ile aynı çalışma prensibine sahip olsa da aralarında bazı farklılıklar bulunmaktadır.',
    ImageRight: '/solve-1.png',
    key: 'one'
  },
  {
    Image: '/message-tick.png',
    area: '2.Adım',
    textHead: 'Problemini Kontrol Et',
    textDown:
      'Litecoin, 2011 yılında eski bir Google çalışanı Charlie Lee tarafından geliştirilmiştir. Temelde Bitcoin ile aynı çalışma prensibine sahip olsa da aralarında bazı farklılıklar bulunmaktadır.',
    ImageRight: '/solve-2.png',
    key: 'two'
  },
  {
    Image: '/task-square.png',
    area: '3.Adım',
    textHead: 'Çözüm Formunu Doldur',
    textDown:
      'Litecoin, 2011 yılında eski bir Google çalışanı Charlie Lee tarafından geliştirilmiştir. Temelde Bitcoin ile aynı çalışma prensibine sahip olsa da aralarında bazı farklılıklar bulunmaktadır.',
    ImageRight: '/solve-3.png',
    key: 'three'
  },
  {
    Image: '/card-tick.png',
    area: '4.Adım',
    textHead: 'Servis Ücretini Tamamla',
    textDown:
      'Litecoin, 2011 yılında eski bir Google çalışanı Charlie Lee tarafından geliştirilmiştir. Temelde Bitcoin ile aynı çalışma prensibine sahip olsa da aralarında bazı farklılıklar bulunmaktadır.',
    ImageRight: '/solve-4.png',
    key: 'four'
  }
]
