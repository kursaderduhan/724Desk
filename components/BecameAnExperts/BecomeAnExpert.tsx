import React, { memo } from 'react'
import {
  VStack,
  Text,
  Container,
  HStack,
  InputGroup,
  Input,
  FormLabel,
  Button,
  Flex
} from '@chakra-ui/react'
import Layout from '@components/Layout/Layout'
import Footer from '@components/Footer/Footer'
export const BecomeAnExpert = () => {
  return (
      <Flex justifyContent={'center'} py={10} flexDirection={'column'} gap={10}>
        <VStack alignItems={'flex-start'} gap={2} px={5}>
          <Flex
            alignItems={'center'}
            flexDirection={{ base: 'column', md: 'row' }}
            alignSelf={'center'}
            gap={2}
          >
            <InputGroup
              flexDirection={'column'}
              w={{ base: '343px', md: '200px' }}
            >
              <FormLabel>Ad Soyad</FormLabel>
              <Input placeholder={'Fatih Demirkan'} />
            </InputGroup>
            <InputGroup
              flexDirection={'column'}
              w={{ base: '343px', md: '200px' }}
            >
              <FormLabel>Telefon Numarası</FormLabel>
              <Input placeholder={'örn. +90 534 936 3296'} />
            </InputGroup>
          </Flex>
        </VStack>
      </Flex>
  )
}

export default memo(BecomeAnExpert)
