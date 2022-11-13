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
export const SignUp = () => {
  return (
    <Layout>
      <HStack
        h={'196px'}
        bg={'#E5EDF4'}
        flexDirection={'column'}
        alignSelf={'flex-end'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        display={{base:"none",md:"flex"}}
      >
        <Container maxW={"1200px"}>
          <Text textStyle={"homePageText"} color={'#333333'} pt={"114px"}>
            Kayıt Ol
          </Text>
          <Text textStyle={"categoriesText"} color={'#959595'} pt={"3px"} pb={"32px"}>
            Farklı ödeme yöntemleri ile ödemenizi tamamlayın.
          </Text>
        </Container>
      </HStack>
      <Flex w={'full'} bg={'#F1F9FE'}>
        <Container maxW={"1200px"}>
          <Flex w={'full'} pt={"76px"} gap={"117px"} justifyContent={"space-between"} pb={"120px"}>
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
                    <Text textStyle={"categoriesText"} color={'#525252'}>
                      Ad
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'Örn.Fatih'}
                    bg={'white'} _placeholder={{textStyle:"subText"}}
                    type={'text'}
                    w={'288px'}
                  />
                </InputGroup>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"} color={'#525252'}>
                      Soyad
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'örn.Demirkan'}
                    bg={'white'} _placeholder={{textStyle:"subText"}}
                    type={'text'}
                    w={'288px'}
                  />
                </InputGroup>
              </Flex>
              <Flex flexDirection={{base:"column",md:"row"}} alignItems={"center"} gap={5}>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"} color={'#525252'}>
                      Telefon Numarası
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'örn. 0507 864 1254'}
                    bg={'white'} _placeholder={{textStyle:"subText"}}
                    type={'tel'}
                    w={'288px'}
                  />
                </InputGroup>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"} color={'#525252'}>
                      E-posta
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'örn. F.Demirkan@gmail.com'}
                    bg={'white'} _placeholder={{textStyle:"subText"}}
                    type={'email'}
                    w={'288px'}
                  />
                </InputGroup>
              </Flex>
              <Flex w={'full'} flexDirection={{base:"column",md:"row"}} alignItems={"center"} gap={5}>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"} color={'#525252'}>
                      Doğum Tarihi
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'örn. 07/06/1996'}
                    bg={'white'} _placeholder={{textStyle:"subText"}}
                    type={'date'} color={"#B3CBD5"}
                    w={'288px'} fontSize={"14px"}
                  />
                </InputGroup>
                <FormControl flexDirection={'column'}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"} color={'#525252'}>
                      Cinsiyet
                    </Text>
                  </FormLabel>
                  <RadioGroup colorScheme={"gray"}>
                    <HStack spacing='25px'>
                      <Radio value='erkek' ><Text fontSize={"12px"} color={"#525252"} lineHeight={"18px"} fontWeight={400}>Erkek</Text></Radio>
                      <Radio value='kadın'><Text fontSize={"12px"} color={"#525252"} lineHeight={"18px"} fontWeight={400}>Kadın</Text></Radio>
                      <Radio value='diğer'><Text fontSize={"12px"} color={"#525252"} lineHeight={"18px"} fontWeight={400}>Diğer</Text></Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </Flex>
              <Flex flexDirection={{base:"column",md:"row"}} alignItems={"center"} gap={5}>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"} color={'#525252'}>
                      Ülke
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'Türkiye'}
                    bg={'white'} _placeholder={{textStyle:"subText"}}
                    type={'text'}
                    w={'288px'}
                  />
                </InputGroup>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"} color={'#525252'}>
                      Şehir
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'Ankara'}
                    bg={'white'} _placeholder={{textStyle:"subText"}}
                    type={'text'}
                    w={'288px'}
                  />
                </InputGroup>
              </Flex>
              <Flex flexDirection={{base:"column",md:"row"}} alignItems={"center"} gap={5}>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"} color={'#525252'}>
                      Telefon Numarası
                    </Text>
                  </FormLabel>
                  <InputGroup w={'288px'}>
                    <Input
                      placeholder={'+90 534 936 3296'}
                      bg={'white'} _placeholder={{textStyle:"subText"}}
                      type={'text'}
                      
                    />
                    <InputRightAddon />
                  </InputGroup>
                </InputGroup>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"} color={'#525252'}>
                      OTP
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'12999'}
                    bg={'white'} _placeholder={{textStyle:"subText"}}
                    type={'text'}
                    w={'288px'}
                  />
                </InputGroup>
              </Flex>
              <Flex flexDirection={{base:"column",md:"row"}} alignItems={"center"} gap={5}>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"} color={'#525252'}>
                      Şifre
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'********'}
                    bg={'white'} _placeholder={{textStyle:"subText"}}
                    type={'password'}
                    w={'288px'}
                  />
                </InputGroup>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"} color={'#525252'}>
                      Şifreyi Onayla
                    </Text>
                  </FormLabel>
                  <Input
                    placeholder={'*********'}
                    bg={'white'} _placeholder={{textStyle:"subText"}}
                    type={'password'}
                    w={'288px'}
                  />
                </InputGroup>
              </Flex>
              <Checkbox alignSelf={'flex-start'} >
                <Text textStyle={"subText"} color={"#525252"}>I read and accept <span style={{ color: '#2485E8' }}>privacy and agreement.</span></Text>
              </Checkbox>
              <Button
                variant={'globalButton'}
                w={'300px'} h={"47px"} rounded={"10px"}
                alignSelf={'flex-start'}
                gap={2}
              >
                <Image src={'/lock.png'} alt={'ımg'} w={'18px'} h={'18px'} />
                <Text textStyle={"homePageSubText"}>Kayıt ol</Text>
              </Button>
            </VStack>
          </Flex>
        </Container>
      </Flex>
    </Layout>
  )
}

export default memo(SignUp)
