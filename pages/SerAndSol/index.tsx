import React, { memo } from 'react'
import Layout from '@components/Layout/Layout'
import {
  Flex,
  HStack,
  VStack,
  Text,
  Image,
  Box,
  Container,
  IconButton,
  Button
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Service from '@components/SerAndSol/Service'
import ServicePanels from '@components/SerAndSol/ServicePanels'
import Info from '@components/SerAndSol/Info'
import Footer from '@components/Footer/Footer'
export const SerAndSol = () => {
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
        py={10}
      >
        <Container maxW={'1200px'} >
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Servisler & Çözümler
          </Text>
          <HStack w={'full'} justifyContent={'space-between'}>
            <Text fontSize={'12px'} fontWeight={400} color={'#959595'}>
              Uzmanlarımız tarafından çözüme kavuşturulmuş problemleri
              inceleyerek kendi problemlerinizin çözümüne ulaşabilirsiniz.
            </Text>
            <IconButton
              as={SearchIcon}
              aria-label={'search'}
              w={'20px'}
              h={'20px'}
              _hover={{ opacity: 0.5 }}
              _active={{ bg: 'transparent' }}
            ></IconButton>
          </HStack>
        </Container>
      </HStack>
      <Container maxW={'1200px'} py={100} >
        <VStack gap={5}>
          <Text fontSize={'26px'} fontWeight={500} textAlign={'center'}>
            <span style={{ color: '#F27C00' }}>724Desk,</span> her türlü bilgi
            ve destek talebinizi
            <br /> karşılayabileceğiniz çevrimiçi destek platformdur.
          </Text>
          <HStack w={'full'} justifyContent={'space-between'}>
            <Image src={'/womenImg.png'} alt={'ımg'} w={'384px'} h={'574px'} />
            <VStack alignItems={'flex-start'} w={580}>
              {text.map(text => (
                <HStack key={text.key}>
                  <Image
                    src={text.Image}
                    alt={'ımage'}
                    w={'20px'}
                    h={'16.50px'}
                    alignSelf={'flex-start'}
                    mt={1}
                  />
                  <VStack alignItems={'flex-start'}>
                    <Text fontSize={'19px'} color={'#333333'} fontWeight={500}>
                      {text.TextHead}
                    </Text>
                    <Text fontSize={'15px'} color={'#959595'} fontWeight={400}>
                      {text.TextDown}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </HStack>
          <Text
            fontSize={'23px'}
            fontWeight={500}
            color={'#525252'}
            alignSelf={'flex-start'}
          >
            Hizmet Verdiğimiz Kategoriler
          </Text>
          <Text
            fontSize={'14px'}
            fontWeight={400}
            color={'#959595'}
            alignSelf={'flex-start'}
          >
            Uzmanlarımızca hazırlanmış onlarca kategori içerisinden probleminize{' '}
            <br /> çözüm bulacak makaleler bulabilir, sorunlarınızı
            çözebilirsiniz.
          </Text>
          <HStack w={'full'} justifyContent={'space-around'}>
            {categories.map(categories => (
              <Box
                key={categories.key}
                w={'389px'}
                h={'200px'}
                bg={categories.bg}
                rounded={15}
                opacity={categories.opac}
              >
                <HStack w={'full'} h={'full'} pos={'relative'}>
                  <VStack
                    alignItems={'flex-start'}
                    justifyContent={'flex-end'}
                    h={'full'}
                    w={'full'}
                    px={5}
                  >
                    <Image
                      src={categories.ImgLeft}
                      alt={'ımg'}
                      w={'42px'}
                      h={'42px'}
                    />
                    <Text fontSize={'23px'} fontWeight={500}>
                      {categories.TextHead}
                    </Text>
                    <Text fontSize={'12px'} fontWeight={400}>
                      {categories.Description}
                    </Text>
                  </VStack>
                  <Text
                    position={'absolute'}
                    w={'full'}
                    display={'flex'}
                    h={'full'}
                    justifyContent={'flex-end'}
                    alignItems={'flex-start'}
                    alignSelf={'flex-start'}
                    px={25}
                    py={25}
                  >
                    {categories.online}
                  </Text>
                  <Box
                    pos={'absolute'}
                    w={'full'}
                    h={'full'}
                    display={'flex'}
                    justifyContent={'flex-end'}
                    alignItems={'flex-start'}
                    alignSelf={'flex-start'}
                  >
                    <Image
                      src={categories.ImgRight}
                      alt={'rightImg'}
                      w={'133px'}
                      h={'133px'}
                    />
                  </Box>
                </HStack>
              </Box>
            ))}
          </HStack>
          <Button
            fontSize={'13px'}
            fontWeight={500}
            color={'#3B78C1'}
            bg={'transparent'}
            border={'1px solid'}
            borderColor={'#3B78C1'}
            alignSelf={'flex-start'}
          >
            Tüm Kategoriler
          </Button>
        </VStack>
      </Container>
      <Service />
      <ServicePanels />
      <Info />
      <Footer />
    </Layout>
  )
}

export default memo(SerAndSol)

interface textProp {
  Image: string
  TextHead: string
  TextDown: string
  key: string
}

const text: Array<textProp> = [
  {
    Image: '/hpCt-1.png',
    TextHead: 'Birçok kategoride hizmet sunmaktayız ',
    TextDown:
      'Kripto, Bulut Servisleri, Güvenlik Servisleri ve daha birçok kategoride hizmet sunmaktayız.',
    key: 'ct-1'
  },
  {
    Image: '/hpCt-2.png',
    TextHead: 'Desteklerimizi birçok iletişim kanalı ile sağlamaktayız',
    TextDown:
      "E-posta, telefon çağrısı, WhatsApp, Telegram, Skype ve Dashboard'ımız üzerinden sizlerle iletişim kurmaktayız.",
    key: 'ct-2'
  },
  {
    Image: '/hpCt-3.png',
    TextHead:
      'Alanlarında en iyi olan uzmanları bir araya getirerek bir topluluk oluşturduk',
    TextDown:
      'Birçok farklı ülkeden, farklı dillerin konuşulduğu, farklı kategorilerde esnek mesai saatlerinin uygulandığı bir platform olarak hizmet vermekteyiz.',
    key: 'ct-3'
  },
  {
    Image: '/hpCt-4.png',
    TextHead: 'Esnek hizmet paketleri sunmaktayız',
    TextDown:
      'Saatlik, tek çözümlük, aylık, 6 aylık, yıllık ve özel hizmet paketlerimiz ile çözümler üretmekteyiz.',
    key: 'ct-4'
  }
]

interface categoriesProp {
  ImgLeft: string
  TextHead: string
  Description: string
  ImgRight: string
  online?: string
  bg: string
  opac?: string
  key: string
}

const categories: Array<categoriesProp> = [
  {
    ImgLeft: '/ct-btc-left.png',
    TextHead: 'Kripto',
    Description:
      'Kripto paralar, sanal para birimi olarak kullanılan ve herhangi bir fiziksel biçimde mevcut olmayan dijital...',
    ImgRight: '/ct-btc-right.png',
    bg: '#F6E9DC',
    key: 'crypto'
  },
  {
    ImgLeft: '/ct-cloud-left.png',
    TextHead: 'Bulut Teknolojisi',
    Description:
      'Kripto paralar, sanal para birimi olarak kullanılan ve herhangi bir fiziksel biçimde mevcut olmayan dijital...',
    ImgRight: '/ct-cloud-right.png',
    online: 'Çok Yakında..',
    bg: '#FFFBEE',
    opac: '0.6',
    key: 'cloud'
  },
  {
    ImgLeft: '/ct-host-left.png',
    TextHead: 'Hosting',
    Description:
      'Kripto paralar, sanal para birimi olarak kullanılan ve herhangi bir fiziksel biçimde mevcut olmayan dijital...',
    ImgRight: '/ct-host-right.png',
    online: 'Çok Yakında..',
    bg: '#FFFBEE',
    opac: '0.6',
    key: 'host'
  }
]
