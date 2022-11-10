import React, { memo } from 'react'
import { Text, Box, Flex, Image, VStack } from '@chakra-ui/react'
export const Learn = () => {
  return (
    <VStack w={'full'} gap={5} pt={{base:"82px",lg:"190px"}}>
      <Text
        color={'#333333'} textStyle={"deskTokenHead"}
        alignSelf={'flex-start'}
      >
        Nasıl Kullanacağını Öğren!
      </Text>
      <Flex
        bgImage={'/learnVideo.png'}
        bgSize={'cover'}
        bgPos={'center'} mt={"32px"}
        w={'full'}
        h={{base:"194px",md:'676px'}}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Image
          src={'/playButton.png'}
          alt={'playButton'}
          w={'114px'}
          h={'114px'}
        />
      </Flex>
    </VStack>
  )
}

export default memo(Learn)
