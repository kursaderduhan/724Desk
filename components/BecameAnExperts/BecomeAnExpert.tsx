import React, { memo } from 'react'
import {
  VStack,
  InputGroup,
  Input,
  FormLabel,
  Flex
} from '@chakra-ui/react'
export const BecomeAnExpert = () => {
  return (
    <VStack alignItems={'flex-start'} gap={2}>
      <Flex
        alignItems={'flex-start'}
        flexDirection={{ base: 'column', md: 'row' }}
        alignSelf={'flex-start'}
        gap={2}
      >
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
          <FormLabel>Ad Soyad</FormLabel>
          <Input placeholder={'Fatih Demirkan'} />
        </InputGroup>
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
          <FormLabel>Telefon Numarası</FormLabel>
          <Input placeholder={'örn. +90 534 936 3296'} />
        </InputGroup>
      </Flex>
    </VStack>
  )
}

export default memo(BecomeAnExpert)
