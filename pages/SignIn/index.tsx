import React, { memo } from 'react'
import Layout from '@components/Layout/Layout'
import {
  HStack,
  Container,
  Text,
  Flex,
  Image,
  Box,
  VStack,
  InputGroup,
  FormLabel,
  Input,
  Radio,
  FormControl,
  RadioGroup,
  InputRightAddon,
  Checkbox,
  Button
} from '@chakra-ui/react'
export const SignIn = () => {
  return (
    <Layout>
      <HStack
        h={'196px'}
        bg={'#E5EDF4'}
        flexDirection={'column'}
        alignSelf={'flex-end'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        gap={5}
        py={10} display={{base:"none",md:"flex"}}
      >
        <Container maxW={"1200px"}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Kayıt Ol
          </Text>
          <Text fontSize={'12px'} fontWeight={'400'} color={'#959595'}>
            Farklı ödeme yöntemleri ile ödemenizi tamamlayın.
          </Text>
        </Container>
      </HStack>
      <Flex w={'full'} bg={'#F1F9FE'}>
        <Container maxW={"1200px"}>
          <Flex w={'full'} py={50} justifyContent={'space-around'}>
            <Flex
              bgImage={'/sıgnIn-ellipse.png'}
              w={491}
              h={491}
              bgPos={'center'}
              justifyContent={'center'}
              alignItems={'flex-end'}
              overflow={'hidden'}
              rounded={'full'} display={{base:"none",md:"flex"}} 
            >
              <Image src={'/sıgnIn.png'} alt={'ımg'} w={481} h={392} />
            </Flex>
            <VStack alignItems={'flex-start'} gap={5}>
              <Flex flexDirection={{base:"column",md:"row"}} alignItems={"center"} gap={5}>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                      Ad
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'Örn.Fatih'}
                    bg={'white'}
                    type={'text'}
                    w={'288px'}
                  />
                </InputGroup>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                      Soyad
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'örn.Demirkan'}
                    bg={'white'}
                    type={'text'}
                    w={'288px'}
                  />
                </InputGroup>
              </Flex>
              <Flex flexDirection={{base:"column",md:"row"}} alignItems={"center"} gap={5}>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                      Telefon Numarası
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'örn. 0507 864 1254'}
                    bg={'white'}
                    type={'tel'}
                    w={'288px'}
                  />
                </InputGroup>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                      E-posta
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'örn. F.Demirkan@gmail.com'}
                    bg={'white'}
                    type={'email'}
                    w={'288px'}
                  />
                </InputGroup>
              </Flex>
              <Flex w={'full'} flexDirection={{base:"column",md:"row"}} alignItems={"center"} gap={5}>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                      Doğum Tarihi
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'örn. 07/06/1996'}
                    bg={'white'}
                    type={'date'}
                    w={'288px'}
                  />
                </InputGroup>
                <FormControl flexDirection={'column'}>
                  <FormLabel>
                    <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                      Cinsiyet
                    </Text>
                  </FormLabel>
                  <RadioGroup defaultValue={'Sasuke'}>
                    <HStack spacing='10px'>
                      <Radio value='Sasuke'>Erkek</Radio>
                      <Radio value='Nagato'>Kadın</Radio>
                      <Radio value='Itachi'>Diğer</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </Flex>
              <Flex flexDirection={{base:"column",md:"row"}} alignItems={"center"} gap={5}>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                      Ülke
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'Türkiye'}
                    bg={'white'}
                    type={'text'}
                    w={'288px'}
                  />
                </InputGroup>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                      Şehir
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'Ankara'}
                    bg={'white'}
                    type={'text'}
                    w={'288px'}
                  />
                </InputGroup>
              </Flex>
              <Flex flexDirection={{base:"column",md:"row"}} alignItems={"center"} gap={5}>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                      Telefon Numarası
                    </Text>
                  </FormLabel>
                  <InputGroup w={'288px'}>
                    <Input
                      placeholder={'+90 534 936 3296'}
                      bg={'white'}
                      type={'text'}
                      
                    />
                    <InputRightAddon />
                  </InputGroup>
                </InputGroup>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                      OTP
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'12999'}
                    bg={'white'}
                    type={'text'}
                    w={'288px'}
                  />
                </InputGroup>
              </Flex>
              <Flex flexDirection={{base:"column",md:"row"}} alignItems={"center"} gap={5}>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                      Şifre
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'********'}
                    bg={'white'}
                    type={'password'}
                    w={'288px'}
                  />
                </InputGroup>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                      Şifreyi Onayla
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'*********'}
                    bg={'white'}
                    type={'password'}
                    w={'288px'}
                  />
                </InputGroup>
              </Flex>
              <Checkbox alignSelf={'flex-start'}>
                I read and accept <span style={{ color: '#2485E8' }}>privacy and agreement.</span>
              </Checkbox>
              <Button
                variant={'globalButton'}
                fontSize={'15px'}
                w={'300px'}
                alignSelf={'flex-start'}
                gap={2}
              >
                <Image src={'/lock.png'} alt={'ımg'} w={'18px'} h={'18px'} />
                Kayıt ol
              </Button>
            </VStack>
          </Flex>
        </Container>
      </Flex>
    </Layout>
  )
}

export default memo(SignIn)
