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
export const BecomeAnExpert = () => {
  return (
    <Layout>
      <VStack
        h={'196px'}
        bg={'#E5EDF4'}
        alignSelf={'flex-end'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        gap={5}
        py={10}
      >
        <Container maxW={{ xl:'1200px',xxl:'1600px'}}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Hemen Uzman Olun
          </Text>
          <Text fontSize={'12px'} fontWeight={400} color={'#959595'}>
            Uzman olmak için aşağıdaki formu doldurun ve hemen başvuru yapın!
          </Text>
        </Container>
      </VStack>
      <Flex justifyContent={'center'} py={10}>
        <VStack alignItems={"flex-start"} gap={5}>
          <Text
            fontSize={'23px'}
            fontWeight={500}
            color={'#333333'}
            alignSelf={'flex-start'}
          >
            Hemen Uzman Olun
          </Text>
          <Text fontSize={'15px'} fontWeight={400} color={'#959595'}>
            Uzman olmak için aşağıdaki formu doldurun ve hemen başvuru yapın!
          </Text>
          <HStack>
            <InputGroup flexDirection={'column'}>
              <FormLabel>Ad Soyad</FormLabel>
              <Input placeholder={'Fatih Demirkan'} />
            </InputGroup>
            <InputGroup flexDirection={'column'}>
              <FormLabel>Telefon Numarası</FormLabel>
              <Input placeholder={'örn. +90 534 936 3296'} />
            </InputGroup>
          </HStack>
          <Button variant={'globalButton'}>Gönder</Button>
        </VStack>
      </Flex>
    </Layout>
  )
}

export default memo(BecomeAnExpert)
