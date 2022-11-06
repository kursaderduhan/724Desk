import React, { memo } from 'react'
import {
  Flex,
  VStack,
  Image,
  Text,
  HStack,
  Box,
  Button,
  Container
} from '@chakra-ui/react'
import Link from 'next/link'
export const Categories = () => {
  return (
    <Flex w={'full'} h={'full'} flexDirection={'column'} bg={'#F7FCFE'}>
      <Container maxW={'1200px'}>
        <Flex
          w={'100%'}
          gap={{ base: '32px', lg: 280 }}
          mt={{ base: '24px', lg: '72px' }}
          flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        >
          {ıtem.map(item => (
            <VStack key={item.key} spacing={{ lg: '-10' }}>
              <Image
                src={item.Image}
                alt={'ımage'}
                maxW={{ base: '125px', lg: '200' }}
                maxH={{ base: '150px', lg: '225' }}
              />
              <Text
                color={item.color}
                textStyle={'homePageText'}
                maxW={'201px'}
                textAlign={'center'}
              >
                {item.text}
              </Text>
            </VStack>
          ))}
        </Flex>
        <Flex
          w={'full'}
          justifyContent={{ base: 'center', md: 'space-around' }}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
          mt={{ base: '54px', lg: '100px' }}
        >
          <Box
            w={{ base: '268px', md: '384px' }}
            h={{ base: '403px', md: '572px' }}
            overflow={'hidden'}
            alignSelf={'center'}
          >
            <Image
              src={'/womenImg.png'}
              alt={'ımg'}
              w={{ base: '268px', md: '382px' }}
              h={{ base: '403px', md: '574px' }}
              zIndex={1}
            />
            {/* <Image
            src={'/hpWomenEllipse.png'}
            alt={'ellipse'}
            pos={'absolute'}
            w={'384px'}
            h={'384px'} mb={50}
          /> */}
          </Box>
          <VStack
            fontWeight={500}
            w={{ base: 'full', md: 580 }}
            alignItems={{ base: 'center', md: 'flex-start' }}
          >
            <Text color={'#959595'} textStyle={'homePageSubText'}>
              724Desk’e hoş geldiniz
            </Text>
            <Text
              textStyle={'homePageText'}
              maxW={'591px'}
              pt={{ base: '32px', lg: '24px' }}
            >
              <span style={{ color: '#F27C00' }}>724Desk,</span> her türlü bilgi
              ve destek talebinizi karşılayabileceğiniz çevrimiçi destek
              platformdur.
            </Text>
            {text.map(text => (
              <HStack
                key={text.key}
                pt={{ base: '51px', lg: '24px' }}
                gap={{ base: '32px', lg: '24px' }}
              >
                <Image
                  src={text.Image}
                  alt={'ımage'}
                  w={'20px'}
                  h={'16.50px'}
                  alignSelf={'flex-start'}
                  mt={1}
                />
                <VStack alignItems={'flex-start'}>
                  <Text
                    fontSize={{ base: '16px', md: '19px' }}
                    color={'#333333'}
                    textStyle={'homePageText'}
                  >
                    {text.TextHead}
                  </Text>
                  <Text
                    textStyle={'homePageSubText'}
                    color={'#959595'}
                    pt={{ base: '12px', lg: '8px' }}
                  >
                    {text.TextDown}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </Flex>
        <VStack
          w={'full'}
          alignItems={{ base: 'center', md: 'flex-start' }}
          pt={{ base: '82px', lg: '100px' }}
          pb={{ base: '82px', lg: '120px' }}
          gap={2}
        >
          <Text
            fontWeight={500}
            alignSelf={'flex-start'}
            fontSize={'23px'}
            color={'#525252'}
            lineHeight={'34px'}
            fontStyle={'normal'}
          >
            Kategoriler
          </Text>
          <Text
            color={'#666666'}
            textStyle={'subText'}
            display={{ base: 'none', lg: 'flex' }}
          >
            Aşağıdaki kategori başlıklarında hizmet sunuyoruz/sunacağız.
          </Text>
          <Flex
            w={'full'}
            justifyContent={'space-between'}
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
            gap={2}
            pt={{ base: '24px', lg: '32px' }}
          >
            {categories.map(categories => (
              <Link href={categories.link} key={categories.key}>
                <Box
                  w={{ base: '343px', md: '389px' }}
                  h={{ base: '187px', md: '200px' }}
                  bg={{ base: '#FFFBEE', lg: categories.bg }}
                  rounded={15}
                  opacity={{ base: 1, lg: categories.opac }}
                  transform={'auto'}
                  _hover={{ scale: '1.02', opacity: '0.7' }}
                  cursor={'pointer'}
                >
                  <HStack w={'full'} h={'full'} pos={'relative'}>
                    <VStack
                      alignItems={'flex-start'}
                      justifyContent={'flex-end'}
                      h={'full'}
                      w={'full'}
                      px={5}
                      py={5}
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
                      display={{ base: 'none', lg: 'flex' }}
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
              </Link>
            ))}
          </Flex>
        </VStack>
        <Flex
          w={'full'}
          justifyContent={'space-between'}
          pb={{base:"82px",lg:"120px"}}
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems={{ base: 'center', lg: 'flex-start' }}
          gap={5}
        >
          <VStack
            alignItems={'flex-start'}
            w={{ base: 'full', lg: '450px' }}
            gap={2}
          >
            <Box display={{ base: 'flex', lg: 'none' }} alignSelf={"center"}>
              <Image
                alt={'hand'}
                src={'/hpHandPhone.png'}
                w={'266px'}
                h={'342px'}
              />
            </Box>
            <Text fontSize={'23px'} fontWeight={500} color={'#525252'} lineHeight={"34px"} fontStyle={"normal"}>
              Problem Çözüm Aşamaları
            </Text>
            {result.map(result => (
              <HStack key={result.key} pt={{base:"24px",lg:"32px"}}>
                <Image
                  src={result.Image}
                  alt={'ımg'}
                  w={"54px"}
                  h={"54px"}
                  alignSelf={'flex-start'}
                />
                <VStack alignItems={'flex-start'}>
                  <Text fontSize={'10px'} fontWeight={400} color={'#666666'} letterSpacing={"0.25px"} lineHeight={"150%"}>
                    {result.area}
                  </Text>
                  <Text fontSize={{base:"19px",lg:'23px'}}  color={'black'} textStyle={"homePageText"}>
                    {result.textHead}
                  </Text>
                  <Text color={'#666666'} textStyle={"categoriesText"} pt={"6px"}>
                    {result.textDown}
                  </Text>
                </VStack>
              </HStack>
            ))}
            <Flex
              w={'full'}
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              gap={2} pt={"24px"} pl={{lg:12}}
            >
              <Link href={'/HowToUse'}>
                <Button
                  bg={'#F27C00'} fontSize={"13px"} letterSpacing={"0.5px"} lineHeight={"20px"} fontWeight={500}
                  color={'white'} fontStyle={"normal"}
                  w={{ base: '164px', md: '176px' }}
                  h={'36px'}
                  _hover={{ opacity: 0.8 }}
                >
                  Hemen Başla
                </Button>
              </Link>
              <Button
                bg={'white'}
                color={'#525252'}
                w={'164px'} fontSize={"13px"} letterSpacing={"0.5px"} lineHeight={"20px"} fontWeight={500}
                h={'36px'} fontStyle={"normal"}
                _hover={{ opacity: 0.8 }}
                display={{ base: 'flex', md: 'none' }}
              >
                Videolu Çözüm
              </Button>
            </Flex>
          </VStack>
          <Box display={{ base: 'none', lg: 'flex' }}>
            <Image
              alt={'hand'}
              src={'/hpHandPhone.png'}
              w={'493px'}
              h={'634px'}
            />
          </Box>
        </Flex>
      </Container>
    </Flex>
  )
}

export default memo(Categories)

interface itemProp {
  Image: string
  text: string
  color: string
  key: string
}

const ıtem: Array<itemProp> = [
  {
    Image: '/hplang.png',
    text: 'Birçok Dilde Destek Alın',
    color: '#005A9C',
    key: 'lang'
  },
  {
    Image: '/hpResult.png',
    text: 'Sorununuza Anında Çözüm Bulun',
    color: '#BA7000',
    key: 'result'
  },
  {
    Image: '/hpExpert.png',
    text: 'Uzmanlardan Yardım Alın',
    color: '#095E12',
    key: 'expert'
  }
]

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
  link: string
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
    link: '/Crypto',
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
    link: '',
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
    link: '',
    key: 'host'
  }
]

interface resultProp {
  Image: string
  area: string
  textHead: string
  textDown: string
  key: string
}

const result: Array<resultProp> = [
  {
    Image: '/edit.png',
    area: '1.Adım',
    textHead: 'Problemini Tanımla',
    textDown: 'Probleminizi birkaç kelime ile tanımlayın.',
    key: 'one'
  },
  {
    Image: '/message-tick.png',
    area: '2.Adım',
    textHead: 'Problemini Kontrol Et',
    textDown:
      'Yaşadığınız problemin yayınlamış olduğumuz makaleler içinde olup olmadığını kontrol edin.',
    key: 'two'
  },
  {
    Image: '/task-square.png',
    area: '3.Adım',
    textHead: 'Çözüm Formunu Doldur',
    textDown:
      'Hâlâ çözüme ulaşamadıysanız size en iyi şekilde yardımcı olabilmemiz için çözüm formumuzu eksiksiz olarak doldurun.',
    key: 'three'
  },
  {
    Image: '/card-tick.png',
    area: '4.Adım',
    textHead: 'Servis Ücretini Tamamla',
    textDown:
      'Size uygun olan hizmet paketini seçin, ödemeyi tamamlayın ve çözüm aşamasına geçin.',
    key: 'four'
  }
]
