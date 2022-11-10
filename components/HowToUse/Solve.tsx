import { HStack, VStack, Image, Text,Flex } from '@chakra-ui/react'
import React, { memo } from 'react'

export const Solve = () => {
  return (
    <VStack w={'full'} py={{ base: 1, lg: "48px" }} pb={{base:"82px",lg:"120px"}}>
      {result.map(result => (
        <Flex w={'full'} justifyContent={'space-between'} key={result.key} flexDirection={{base:"column",lg:"row"}} pt={"72px"}>
          <HStack alignSelf={"flex-start"} >
            <Image src={result.Image} alt={'ımg'} w={'54px'} h={'54px'} alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text textStyle={"smallText"} color={'#666666'}>
                {result.area}
              </Text>
              <Text textStyle={"deskTokenHead"} color={'black'}>
                {result.textHead}
              </Text>
              <Text textStyle={"subText"} color={'#666666'} maxW={{base:"full",lg:"522px"}}>
                {result.textDown}
              </Text>
            </VStack>
          </HStack>
          <Image src={result.ImageRight} alt={'ımg'} pt={{ base: "16px",lg:"0px" }} w={{ base: "273px", lg: '491px' }} h={{base:"202px",lg:'364px'}} alignSelf={"center"} />
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
