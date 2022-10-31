import React, { memo } from 'react'
import { VStack, Text, Image, Flex } from '@chakra-ui/react'
export const MostRead = ({ changePage }: {changePage?:any }) => {
  return (
    <VStack w={'full'} h={'full'}>
      <Flex
        w={'full'}
        justifyContent={'space-between'}
        gap={15} flexDirection={{base:"column",md:"row"}}
        alignContent={'space-between'}
        h={'full'} _hover={{transition:"1.2s", bg:"#E1EEF6", rounded:10}} cursor={"pointer"} onClick={() => changePage()}
      >
        <Image src={'/DataBase-Img.png'} alt={'ımg'} w={{ base: "343px", md: '491px' }} h={{base:"192px",md:'276px'}} />
        <VStack alignItems={'flex-start'} justifyContent={'space-between'}>
          <Text fontWeight={500} fontSize={{base:"19px",md:'33px'}} color={'#333333'}>
            Son Bir Haftada En Çok Yükselen Kripto Paralar
          </Text>
          <Text
            color={'#666666'}
            fontSize={'14px'}
            fontWeight={400}
            w={{base:"full",md:'655px'}}
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
          <Text fontSize={'12px'} color={'#666666'} fontWeight={400}>
            08/02/2022
          </Text>
        </VStack>
      </Flex>
    </VStack>
  )
}

export default memo(MostRead)
