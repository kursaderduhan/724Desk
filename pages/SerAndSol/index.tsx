import React, { memo, useState } from 'react'
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
import { SearchIcon } from '@chakra-ui/icons'
import Service from '@components/SerAndSol/Service'
import ServicePanels from '@components/SerAndSol/ServicePanels'
import Info from '@components/SerAndSol/Info'
import Footer from '@components/Footer/Footer'
import Link from 'next/link'
export const SerAndSol = () => {
  const [searchSize, setSearchSize] = useState<boolean>(false)
  const [smallScreen] = useMediaQuery("(max-width:572px)")
  return (
    <Layout>
      <HStack
        h={'196px'}
        bg={{base:"#F7FCFE",md:'#E5EDF4'}}
        flexDirection={'column'}
        alignSelf={'flex-end'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        gap={5}
        py={10}
        display={{ base: 'none', md: 'flex' }}
      >
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Servisler & Çözümler
          </Text>
          <HStack w={'full'} justifyContent={'space-between'} alignItems={"center"}>
            <Text fontSize={'12px'} fontWeight={400} color={'#959595'}>
              Uzmanlarımız tarafından çözüme kavuşturulmuş problemleri
              inceleyerek kendi problemlerinizin çözümüne ulaşabilirsiniz.
            </Text>
            <InputGroup w={searchSize == true ? "170px" : "20px" }>
            <InputLeftElement
              aria-label={'search'}
              w={'20px'}
             alignSelf={"center"}
              _hover={{ opacity: 0.5 }}
              _active={{ bg: 'transparent' }} onClick={() => searchSize == true ? setSearchSize(false) : setSearchSize(true) }
              ><SearchIcon /></InputLeftElement>
              <Input bg={searchSize ? "D2DFEB" : "transparent"} w={searchSize ? "170px" : "20px"} border={searchSize ? "1px solid" : "none"} borderColor={"black"} placeholder={"Ara"} />
              </InputGroup>
          </HStack>
        </Container>
      </HStack>
      <Container
        maxW={{ xl: '1200px', xxl: '1600px' }}
        py={{ base: 10, md: 100 }}
      >
        <VStack gap={5} bg={'white'}>
          <Text
            fontSize={'26px'}
            fontWeight={500}
            textAlign={'center'}
            display={{ base: 'none', md: 'flex' }}
          >
            <span style={{ color: '#F27C00' }}>724Desk,</span>her türlü bilgi
            ve destek talebinizi<br />karşılayabileceğiniz çevrimiçi destek platformdur.
          </Text>
          <HStack
            w={'full'}
            justifyContent={'space-between'}
            display={{ base: 'none', md: 'flex' }}
          >
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
            display={{ base: 'none', md: 'flex' }}
          >
            Hizmet Verdiğimiz Kategoriler
          </Text>
          <Text
            fontSize={'14px'}
            fontWeight={400}
            color={'#959595'}
            alignSelf={'flex-start'}
            display={{ base: 'none', md: 'flex' }}
          >
            Uzmanlarımızca hazırlanmış onlarca kategori içerisinden probleminize{' '}
            <br /> çözüm bulacak makaleler bulabilir, sorunlarınızı
            çözebilirsiniz.
          </Text>
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={'center'}
            w={'full'}
            justifyContent={'space-around'}
            gap={5}
          >
            {categories.map(categories => (
              <Link href={categories.link} key={categories.key}>
                <Box
                  w={{ base: '343px', md: '389px' }}
                  h={{ base: '323px', md: '200px' }}
                  bg={{base:"white",md: categories.bg }}
                  rounded={15}
                  opacity={categories.opac}
                  transform={'auto'}
                  _hover={{ scale: '1.02', opacity: '0.7' }}
                  cursor={'pointer'} overflow={"hidden"} boxShadow={"sm"}
                >
                  <HStack w={'full'} h={'full'} pos={'relative'}>
                    <VStack
                      alignItems={'flex-start'}
                      justifyContent={{base:"space-between",md:'flex-end'}}
                      h={'full'}
                      w={'full'}
                      p={5}
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
                      <Flex display={{ base: 'flex', md: 'none' }}>
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
                        <Text color={categories.online ? 'gray' : '#56C568'}>
                          <span>{categories.activeExpert}</span> Uzman Aktif
                        </Text>
                      </Flex>
                      <Flex display={{ base: 'flex', md: 'none' }}>
                        <Image
                          src={'/arrowRight.png'}
                          alt={'arrow'}
                          w={'17px'}
                          h={'10px'}
                        />
                        <Text fontSize={'12px'} fontWeight={400}>
                          {categories.choose}
                        </Text>
                      </Flex>
                    </VStack>
                    <Text
                      position={'absolute'}
                      w={'full'}
                      display={{base:"none",md:'flex'}}
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
          <Link href={'/Categories'}>
            <Button
              fontSize={'13px'}
              fontWeight={500}
              color={'#3B78C1'}
              bg={'transparent'}
              border={'1px solid'}
              borderColor={'#3B78C1'}
              alignSelf={'flex-start'} display={{base:"none",md:"flex"}}
            >
              Tüm Kategoriler
            </Button>
          </Link>
        </VStack>
      </Container>
      <Flex flexDirection={'column'} display={{ base: 'none', md: 'flex' }}>
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
      'Kripto paralar, sanal para birimi olarak kullanılan ve herhangi bir fiziksel biçimde mevcut olmayan dijital...',
    ImgRight: '/ct-btc-right.png',
    bg: '#F6E9DC',
    link: '/Crypto',
    choose: 'NFT, Borsalar, Blockchain, Dao, GameFi',
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
    choose: 'Altcoin, Blockchain, Kriptografi, DeFi, Metaverse',
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
