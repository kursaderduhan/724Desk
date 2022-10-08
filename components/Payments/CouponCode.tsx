import React,{memo} from 'react'
import {
  HStack,
  InputGroup,
  Input,
  VStack,
  Text,
  InputRightAddon
} from '@chakra-ui/react'

const CouponCode = () => {
  return (
    <VStack w={'288px'} h={'120px'} bg={'white'}>
      <Text
        w={'full'}
        h={'42px'}
        bg={'#F5ECE3'}
        alignSelf={'center'}
        fontSize={'13px'}
        color={'#333333'}
        display={'flex'}
        fontWeight={500}
        alignItems={'center'}
        px={5}
      >
        Kupon Kodu
      </Text>
      <InputGroup w={'256px'} h={'46px'}>
        <Input placeholder={'Kupon Kodu'} />
        <InputRightAddon cursor={'pointer'}>Uygula</InputRightAddon>
      </InputGroup>
    </VStack>
  )
}

export default memo(CouponCode)
