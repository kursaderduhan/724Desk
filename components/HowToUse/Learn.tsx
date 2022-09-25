import React, { memo } from 'react'
import { Text, Box, Flex, Image, VStack } from '@chakra-ui/react'
export const Learn = () => {
  return (
    <VStack w={'full'} gap={5}>
      <Text
        fontSize={'23px'}
        fontWeight={500}
        color={'#333333'}
        alignSelf={'flex-start'}
      >
        Nasıl Kullanacağını Öğren!
      </Text>
      <Flex
        bgImage={'/learnVideo.png'}
        bgSize={'cover'}
        bgPos={'center'}
        w={'full'}
        h={'676px'}
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
