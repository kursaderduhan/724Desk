import React, { memo } from 'react'
import Layout from '@components/Layout/Layout'
import {
  HStack,
  Container,
  Text,
  VStack,
  Image,
  Circle,
  InputGroup,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex
} from '@chakra-ui/react'
import Footer from '@components/Footer/Footer'
export const Contact = () => {
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
            Bizimle İletişime Geçin
          </Text>
          <Text fontSize={'12px'} fontWeight={'400'} color={'#959595'}>
            Uzman olmak için gereken adımları inceleyin
          </Text>
        </Container>
      </HStack>
      <VStack>
        <Container maxW={"1200px"}>
          <Flex flexDirection={{ base: "column", md: "row" }} alignItems={"center"} w={'full'} gap={{ base: 5, md: 40 }} py={{base:2,md:50}}>
            <VStack alignItems={'flex-start'} alignSelf={'flex-start'} gap={2}>
              <Text fontSize={"23px"} fontWeight={500}>İletişim kanalları</Text>
              <Text color={{base:"#959595",md:"black"}}>Bize aşağıdaki iletişim kanallarından ulaşın!</Text>
              <HStack>
                <Circle size='38px' bg={'#2C4EC6'}>
                  <Image src={'/call.png'} alt={'ımg'} w={'22px'} h={'22px'} />
                </Circle>
                <Text fontSize={'15px'} fontWeight={400} color={'#333333'}>
                  +90 534 936 3296
                </Text>
              </HStack>
              <HStack>
                <Circle size='38px' bg={'#FCCA1B'}>
                  <Image src={'/sms.png'} alt={'ımg'} w={'22px'} h={'22px'} />
                </Circle>
                <Text fontSize={'15px'} fontWeight={400} color={'#333333'}>
                  fdemirkan4@gmail.com
                </Text>
              </HStack>
              <HStack>
                <Circle size='38px' bg={'#56C568'}>
                  <Image
                    src={'/whatsapp.png'}
                    alt={'ımg'}
                    w={'22px'}
                    h={'22px'}
                  />
                </Circle>
                <Text fontSize={'15px'} fontWeight={400} color={'#333333'}>
                  +90 534 936 3296
                </Text>
              </HStack>
              <HStack>
                <Circle size='38px' bg={'#2A8CE9'}>
                  <Image
                    src={'/telegram.png'}
                    alt={'ımg'}
                    w={'22px'}
                    h={'22px'}
                  />
                </Circle>
                <Text fontSize={'15px'} fontWeight={400} color={'#333333'}>
                  t.me/fdemirkan
                </Text>
              </HStack>
            </VStack>
            <VStack alignItems={'flex-start'} w={"full"} gap={2}>
              <Text fontSize={'23px'} fontWeight={500}>Sosyal medya adresleri</Text>
              <Text color={{base:"#959595",md:"black"}}>Bizi sosyal medya hesaplarımızdan takip edin!</Text>
              <HStack>
                <Circle size='38px' bg={'#4267B2'}>
                  <Image
                    src={'/facebook.png'}
                    alt={'ımg'}
                    w={'22px'}
                    h={'22px'}
                  />
                </Circle>
                <Text fontSize={'15px'} fontWeight={400} color={'#333333'}>
                  fb.me/724desk
                </Text>
              </HStack>
              <HStack>
                <Circle size='38px' bg={'#1DA1F2'}>
                  <Image
                    src={'/twitter.png'}
                    alt={'ımg'}
                    w={'22px'}
                    h={'22px'}
                  />
                </Circle>
                <Text fontSize={'15px'} fontWeight={400} color={'#333333'}>
                  twitter.com/724desk
                </Text>
              </HStack>
              <HStack>
                <Circle size='38px' bg={'#0072B1'}>
                  <Image
                    src={'/linkedin.png'}
                    alt={'ımg'}
                    w={'22px'}
                    h={'22px'}
                  />
                </Circle>
                <Text fontSize={'15px'} fontWeight={400} color={'#333333'}>
                  linked.in/724desk
                </Text>
              </HStack>
              <HStack>
                <Circle
                  size='38px'
                  bgImg={'/instagram-ellipse.png'}
                  bgSize={'cover'}
                >
                  <Image
                    src={'/instagram.png'}
                    alt={'ımg'}
                    w={'22px'}
                    h={'22px'}
                  />
                </Circle>
                <Text fontSize={'15px'} fontWeight={400} color={'#333333'}>
                  instagram.com/724desk
                </Text>
              </HStack>
            </VStack>
          </Flex>
          <VStack py={{base:10,md:5}}>
            <VStack alignItems={'flex-start'} gap={5}>
              <Text fontSize={'23px'} color={'#333333'} fontWeight={500}>
                İletişim Bilgileri
              </Text>
              <Text fontSize={'15px'} color={'#959595'} fontWeight={400}>
                İletişim bilgilerinizi yazın, biz size dönüş yapalım.
              </Text>
              <Flex flexDirection={{base:"column",md:"row"}} alignItems={"center"}>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text>Ad Soyad</Text>
                  </FormLabel>
                  <Input
                    placeholder='örn. Fatih Demirkan'
                    type={'text'}
                    w={{base:"343px",md:'389px'}}
                  />
                </InputGroup>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text>E-mail</Text>
                  </FormLabel>
                  <Input
                    placeholder='örn. fdemirkan4@gmail.com'
                    type={'email'}
                   w={{base:"343px",md:'389px'}}
                  />
                </InputGroup>
              </Flex>
              <Flex flexDirection={{base:"column",md:"row"}} alignItems={"center"}>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text>Telefon Numarası</Text>
                  </FormLabel>
                  <Input
                    placeholder='örn. +90 534 936 3296'
                    type={'number'}
                    w={{base:"343px",md:'389px'}}
                  />
                </InputGroup>
                <InputGroup flexDirection={'column'}>
                  <FormLabel>
                    <Text>Konu</Text>
                  </FormLabel>
                  <Input
                    placeholder='örn. Doge Coin hakkında'
                    type={'text'}
                    w={{base:"343px",md:'389px'}}
                  />
                </InputGroup>
              </Flex>
              <Textarea
                placeholder='örn. Merhaba, doge coin hakkında bilgi almak istiyorum, lütfen dönüş yapar mısınız?'
                size='sm'
                resize={'none'}
                w={{base:"343px",md:'794px'}}
                h={'283px'}
              />
              <Button variant={'globalButton'} w={{base:"343px",md:'136px'}}>
                Gönder
              </Button>
            </VStack>
          </VStack>
        </Container>
      </VStack>
      <Footer />
    </Layout>
  )
}

export default memo(Contact)
