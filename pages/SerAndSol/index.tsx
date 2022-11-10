import React, { memo, useEffect, useState } from 'react'
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
  Button,
  InputGroup,
  Input,
  InputLeftElement,
  useMediaQuery
} from '@chakra-ui/react'
import { RiSearch2Line } from 'react-icons/ri'
import { SearchIcon } from '@chakra-ui/icons'
import Service from '@components/SerAndSol/Service'
import ServicePanels from '@components/SerAndSol/ServicePanels'
import Info from '@components/SerAndSol/Info'
import Footer from '@components/Footer/Footer'
import Link from 'next/link'
import useWindowSize from 'hooks/useWindowSize'
import screen from '../../constants'

interface Size {
  width: number | undefined
  height: number | undefined
}

export const SerAndSol = () => {
  const [searchSize, setSearchSize] = useState<boolean>(false)
  const size: Size = useWindowSize()
  const [change, setChange] = useState(categories)
  useEffect(() => {
    const width = size.width
    if (width! > 768) {
      setChange(categories.slice(0, 3))
    }
  }, [size.width])
  useEffect(() => {
    const width = size.width
    if (width! < 768) {
      setChange(categories)
    }
  }, [size.width])

  const [a, b, c] = categories
  const result = [a, b, c]
  return (
    <Layout>
      <HStack
        h={'196px'}
        bg={{ base: '#F7FCFE', lg: '#E5EDF4' }}
        flexDirection={'column'}
        alignSelf={'flex-end'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        gap={5}
        display={{ base: 'none', lg: 'flex' }}
      >
        <Container maxW={'1200px'} pt={'114px'} pb={'32px'}>
          <Text textStyle={'homePageText'} color={'#333333'}>
            Servisler & Çözümler
          </Text>
          <HStack
            w={'full'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Text textStyle={'categoriesText'} color={'#959595'}>
              Uzmanlarımız tarafından çözüme kavuşturulmuş problemleri
              inceleyerek kendi problemlerinizin çözümüne ulaşabilirsiniz.
            </Text>
            <InputGroup
              w={searchSize == true ? '170px' : '20px'}
              transition={'0.5s'}
            >
              <InputLeftElement
                aria-label={'search'}
                _hover={{ opacity: 0.5 }}
                h={'100%'}
                _active={{ bg: 'transparent' }}
                onClick={() =>
                  searchSize ? setSearchSize(false) : setSearchSize(true)
                }
              >
                <RiSearch2Line
                  size={'28px'}
                  color={searchSize ? 'black' : '#959595'}
                />
              </InputLeftElement>
              <Input
                bg={searchSize ? '#D2DFEB' : 'transparent'}
                size={'lg'}
                border={'none'}
                alignItems={'center'}
                w={searchSize ? '170px' : '20px'}
                placeholder={'Ara'}
                _placeholder={{ fontSize: '14px' }}
              />
            </InputGroup>
          </HStack>
        </Container>
      </HStack>
      <Flex bg={'#F7FCFE'} h={'full'} pb={'82px'}>
        <Container maxW={'1200px'} pt={'42px'}>
          <VStack>
            <Text
              textStyle={'serviceHead'}
              textAlign={'center'}
              display={{ base: 'none', lg: 'initial' }}
              maxW={'792px'}
            >
              <span style={{ color: '#F27C00' }}>724Desk,</span> her türlü bilgi
              ve destek talebinizi karşılayabileceğiniz çevrimiçi destek
              platformdur.
            </Text>
            <HStack
              w={'full'}
              justifyContent={'space-between'}
              display={{ base: 'none', lg: 'flex' }}
              pt={'24px'}
            >
              <Image
                src={'/womenImg.png'}
                alt={'ımg'}
                w={'384px'}
                h={'574px'}
              />
              <VStack alignItems={'flex-start'} w={580}>
                {text.map(text => (
                  <HStack key={text.key} pt={'32px'}>
                    <Image
                      src={text.Image}
                      alt={'ımage'}
                      w={'32px'}
                      h={'32px'}
                      alignSelf={'flex-start'}
                      mt={1}
                    />
                    <VStack alignItems={'flex-start'}>
                      <Text textStyle={'homePageText'} color={'#333333'}>
                        {text.TextHead}
                      </Text>
                      <Text
                        pt={'8px'}
                        maxW={'649px'}
                        textStyle={'homePageSubText'}
                        color={'#959595'}
                      >
                        {text.TextDown}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
                <Link href={'/'}>
                  <Button
                    left={35}
                    top={'24px'}
                    fontSize={'13px'}
                    fontStyle={'normal'}
                    w={'195px'}
                    h={'36px'}
                    borderRadius={'5px'}
                    color={'#F27C00'}
                    letterSpacing={'0.5px'}
                    lineHeight={'20px'}
                    borderColor={'#F27C00'}
                    bg={'transparent'}
                    border={'1px solid'}
                  >
                    Daha Fazla Bilgi
                  </Button>
                </Link>
              </VStack>
            </HStack>
            <Text
              textStyle={'deskTokenHead'}
              color={'#525252'}
              pt={'164px'}
              alignSelf={'flex-start'}
              display={{ base: 'none', lg: 'flex' }}
            >
              Hizmet Verdiğimiz Kategoriler
            </Text>
            <Text
              color={'#959595'}
              pt={'12px'}
              alignSelf={'flex-start'}
              textStyle={'subText'}
              display={{ base: 'none', lg: 'flex' }}
              maxW={'532px'}
            >
              Uzmanlarımızca hazırlanmış onlarca kategori içerisinden
              probleminize çözüm bulacak makaleler bulabilir, sorunlarınızı
              çözebilirsiniz.
            </Text>
            {/* <Text>{change}</Text> */}
            <Flex
              flexDirection={{ base: 'column', lg: 'row' }}
              alignItems={'center'}
              w={'full'}
              justifyContent={'space-around'}
              gap={5}
              pt={{ base: '16px', lg: '32px' }}
            >
              {change.map(categories => (
                <Link href={categories.link} key={categories.key}>
                  <Box
                    w={{ base: '343px', lg: '389px' }}
                    h={{ base: '323px', lg: '328px' }}
                    bg={'white'}
                    rounded={15}
                    opacity={categories.opac}
                    transform={'auto'}
                    _hover={{ scale: '1.02', opacity: '0.7' }}
                    cursor={'pointer'}
                    overflow={'hidden'}
                    boxShadow={'sm'}
                  >
                    <HStack w={'full'} h={'full'} pos={'relative'}>
                      <VStack
                        alignItems={'flex-start'}
                        justifyContent={'space-between'}
                        h={'full'}
                        w={'full'}
                        py={'32px'}
                        px={'24px'}
                      >
                        <Image
                          src={categories.ImgLeft}
                          alt={'ımg'}
                          w={'42px'}
                          h={'42px'}
                        />
                        <Text textStyle={'deskTokenHead'}>
                          {categories.TextHead}
                        </Text>
                        <Text textStyle={'categoriesText'}>
                          {categories.Description}
                        </Text>
                        <Flex alignItems={'center'} gap={2}>
                          <Image
                            src={
                              categories.online
                                ? '/radar-offline.png'
                                : '/radar.png'
                            }
                            alt={'radar'}
                            w={'24px'}
                            h={'24px'}
                          />
                          <Text
                            color={categories.online ? 'gray' : '#56C568'}
                            textStyle={'categoriesText'}
                          >
                            <span>{categories.activeExpert}</span> Uzman Aktif
                          </Text>
                        </Flex>
                        <Flex alignItems={'center'} gap={3}>
                          <Image
                            src={'/arrowRight.png'}
                            alt={'arrow'}
                            w={'17px'}
                            h={'10px'}
                          />
                          <Text textStyle={'categoriesText'}>
                            {categories.choose}
                          </Text>
                        </Flex>
                      </VStack>
                      <Text
                        position={'absolute'}
                        w={'full'}
                        display={{ base: 'none', lg: 'flex' }}
                        h={'full'}
                        justifyContent={'flex-end'}
                        alignItems={'flex-start'}
                        alignSelf={'flex-start'}
                        textStyle={'homePageSubText'}
                        px={'25px'}
                        py={'25px'}
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
            <Link href={'/Categories'}>
              <Button
                top={'32px'}
                color={'#3B78C1'}
                w={'196px'}
                bg={'transparent'}
                h={'36px'}
                border={'1px solid'}
                textStyle={'footerSmall'}
                letterSpacing={'0.5px'}
                borderColor={'#3B78C1'}
                alignSelf={'flex-start'}
                display={{ base: 'none', lg: 'flex' }}
              >
                Tüm Kategoriler
              </Button>
            </Link>
          </VStack>
        </Container>
      </Flex>
      <Flex flexDirection={'column'} display={{ base: 'none', lg: 'flex' }}>
        <Service />
        <ServicePanels />
        <Info />
      </Flex>
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
  link: string
  activeExpert?: number
  choose?: string
}

const categories: Array<categoriesProp> = [
  {
    ImgLeft: '/ct-btc-left.png',
    TextHead: 'Kripto',
    Description:
      'Kripto paralar, sanal para birimi olarak kullanılan ve herhangi bir fiziksel biçimde mevcut olmayan dijital varlıklardır. Kriptografi, yani şifreleme ile güvence altına alınmışlardır. Bu sayede örneğin; sahtecilik ve...',
    ImgRight: '/ct-btc-right.png',
    bg: '#F6E9DC',
    link: '/Crypto',
    choose: 'NFT, Borsalar, Blockchain, Dao, GameFi',
    activeExpert: 154,
    key: 'crypto'
  },
  {
    ImgLeft: '/ct-cloud-left.png',
    TextHead: 'Bulut Teknolojisi',
    Description:
      'Bulut bilişim olarak da anılan bulut teknolojisi (cloud computing); bilgisayar, telefon, tablet ve sunucu gibi tüm cihazlar arasında zaman ve mekân kısıtlaması olmadan veri paylaşımına olanak sağlayan, internet...',
    ImgRight: '/ct-cloud-right.png',
    online: 'Çok Yakında..',
    bg: '#FFFBEE',
    opac: '0.6',
    activeExpert: 0,
    link: '',
    choose: 'Altcoin, Blockchain, Kriptografi, DeFi, Metaverse',
    key: 'cloud'
  },
  {
    ImgLeft: '/ct-host-left.png',
    TextHead: 'Hosting',
    Description:
      'Web hosting (web sitesi barındırma), web sitenizin içeriğinin ve tüm dosyalarının; kesintisiz çalışacak şekilde korunan ve 7/24 internet bağlantısı bulunan bir sunucuda depolanmasıdır. Web sitenizin yayınla...',
    ImgRight: '/ct-host-right.png',
    online: 'Çok Yakında..',
    bg: '#FFFBEE',
    opac: '0.6',
    activeExpert: 0,
    link: '',
    choose: 'Altcoin, Blockchain, Kriptografi, DeFi, Metaverse',
    key: 'host'
  },
  {
    ImgLeft: '/monitor.png',
    TextHead: 'Hosting',
    Description:
      'Kripto paralar, sanal para birimi olarak kullanılan ve herhangi bir fiziksel biçimde mevcut olmayan dijital varlıklardır. Kriptografi, yani şifreleme ile güvence altına alınmışlardır. Bu sayede örneğin; sahtecilik ve...',
    ImgRight: '/monitor.png',
    online: 'Çok Yakında..',
    bg: '#FFFBEE',
    opac: '0.6',
    activeExpert: 0,
    choose: 'Altcoin, Blockchain, Kriptografi, DeFi, Metaverse',
    link: '',
    key: 'computer'
  },
  {
    ImgLeft: '/global-edit.png',
    TextHead: 'Web Servisleri',
    Description:
      'Bulut bilişim olarak da anılan bulut teknolojisi (cloud computing); bilgisayar, telefon, tablet ve sunucu gibi tüm cihazlar arasında zaman ve mekân kısıtlaması olmadan veri paylaşımına olanak sağlayan, internet...',
    ImgRight: '/global-edit.png',
    online: 'Çok Yakında..',
    bg: '#FFFBEE',
    opac: '0.6',
    activeExpert: 0,
    choose: 'Altcoin, Blockchain, Kriptografi, DeFi, Metaverse',
    link: '',
    key: 'web-service'
  },
  {
    ImgLeft: '/mobile.png',
    TextHead: 'Mobil Cihazlar',
    Description:
      'Web hosting (web sitesi barındırma), web sitenizin içeriğinin ve tüm dosyalarının; kesintisiz çalışacak şekilde korunan ve 7/24 internet bağlantısı bulunan bir sunucuda depolanmasıdır. Web sitenizin yayınla...',
    ImgRight: '/mobile.png',
    online: 'Çok Yakında..',
    bg: '#FFFBEE',
    opac: '0.6',
    activeExpert: 0,
    choose: 'Altcoin, Blockchain, Kriptografi, DeFi, Metaverse',
    link: '',
    key: 'mobile'
  }
]
