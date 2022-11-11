import React, { memo } from 'react'
import { VStack, Text, Image, Flex, HStack } from '@chakra-ui/react'
export const MostRead = ({ changePage }: { changePage?: any }) => {
  return (
    <VStack w={'100%'} h={'full'} alignItems={"flex-start"}>
      <HStack
        w={{base:"100%",lg:'1200px'}} 
        gap={'44px'}
        flexDirection={{ base: 'column', lg: 'row' }}
        alignContent={'space-between'}
        h={'full'} 
        _hover={{ transition: '1.2s', bg: '#E1EEF6',rounded:"10px" }}
        cursor={'pointer'}
        onClick={() => changePage()}
      >
        <Image
          src={'/DataBase-Img.png'}
          alt={'ımg'}
          w={{ base: '343px', lg: '491px' }}
          h={{ base: '192px', lg: '276px' }}
        />
        <VStack alignItems={'flex-start'} justifyContent={'space-between'}>
          <Text
            textStyle={'bigText'}
            fontSize={{ base: '19px', lg: '33px' }}
            maxW={'655px'} fontWeight={500}
            color={'#333333'}
          >
            Son Bir Haftada En Çok Yükselen Kripto Paralar
          </Text>
          <Text
            color={'#666666'}
            textStyle={'subText'} pt={"6px"}
            w={{ base: 'full', lg: '655px' }}
          >
            En büyük kripto para listeleme platformlarından biri olan
            CoinGecko’dan alınan verilere göre, son bir haftada en çok yükselen
            kripto paralar şunlar: Son günlerin parlayan yıldızı Xido Finance
            (XIDO) %84 lük bir yükselişle geliyor. En büyük kripto para
            listeleme platformlarından biri olan CoinGecko’dan alınan verilere
            göre, son bir haftada en çok yükselen kripto paralar şunlar: Son
            günlerin parlayan yıldızı Xido Finance (XIDO) %84 lük bir yükselişle
            geliyor.
          </Text>
          <Text textStyle={"categoriesText"} color={'#666666'} pt={"16px"}>
            08/02/2022
          </Text>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default memo(MostRead)
