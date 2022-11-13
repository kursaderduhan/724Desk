import React,{useState} from 'react'
import {
  Flex,
  Text,
  HStack,
  VStack,
  Image,
  Box,
  Container,
  IconButton,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Input
} from '@chakra-ui/react'
import Layout from '@components/Layout/Layout'
import { SearchIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { RiSearch2Line } from 'react-icons/ri'
import Footer from '@components/Footer/Footer'
export const Categories = () => {
  const [searchSize, setSearchSize] = useState<boolean>(false)
  return (
    <Layout>
      <HStack
        h={'196px'}
        bg={'#E5EDF4'}
        flexDirection={'column'}
        alignSelf={'flex-end'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
      >
        <Container maxW={"1200px"}>
          <Text textStyle={"homePageText"} color={'#333333'} pb={"3px"}>
            Kategoriler
          </Text>
          <HStack w={'full'} justifyContent={'space-between'} alignItems={"center"}>
            <Text color={'#959595'} textStyle={"categoriesText"} pb={"32px"}>
              Uzmanlarımız tarafından çözüme kavuşturulmuş problemleri
              inceleyerek kendi problemlerinizin çözümüne ulaşabilirsiniz.
            </Text>
            <InputGroup
              w={searchSize == true ? '170px' : '20px'}
              transition={'0.5s'} bottom={"32px"}
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
      <VStack w={"100%"} bg={"#F7FCFE"}>
      <Container maxW={"1200px"} centerContent>
        <SimpleGrid w={'full'} columns={{base:1,lg:3}} spacing={10} pt={"42px"}>
          {categories.map(categories => (
            <Link href={categories.Link} key={categories.key}>
              <Box
                cursor={'pointer'}
                w={'389px'}
                h={'328px'}
                bg={"white"}
                rounded={15} _hover={{opacity:1.1}}
                opacity={categories.opac}
              >
                <HStack
                  w={'full'}
                  h={'full'}
                  pos={'relative'}
                  overflow={'hidden'}
                >
                  <VStack
                    alignItems={'flex-start'}
                    justifyContent={'space-evenly'}
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
                    <Text textStyle={"deskTokenHead"}>
                      {categories.TextHead}
                    </Text>
                    <Text textStyle={"categoriesText"}>
                      {categories.Description}
                    </Text>
                    <Flex>
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
                      <Text color={categories.online ? 'gray' : '#56C568'} textStyle={"categoriesText"}>
                        <span>{categories.activeExpert}</span> Uzman Aktif
                      </Text>
                    </Flex>
                    <Flex>
                      <Image
                        src={'/arrowRight.png'}
                        alt={'arrow'}
                        w={'17px'}
                        h={'10px'}
                      />
                      <Text textStyle={"categoriesText"}>
                        {categories.choose}
                      </Text>
                    </Flex>
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
            </Link>
          ))}
        </SimpleGrid>
        <Footer/>
      </Container>
      </VStack>
    </Layout>
  )
}

export default Categories

interface categoriesProp {
  ImgLeft: string
  TextHead: string
  Description: string
  ImgRight: string
  online?: string
  bg: string
  opac?: string
  activeExpert: number
  choose: string
  Link: string
  key: string
}

const categories: Array<categoriesProp> = [
  {
    ImgLeft: '/ct-btc-left.png',
    TextHead: 'Kripto',
    Description:
      'Kripto paralar, sanal para birimi olarak kullanılan ve herhangi bir fiziksel biçimde mevcut olmayan dijital varlıklardır. Kriptografi, yani şifreleme ile güvence altına alınmışlardır. Bu sayede örneğin; sahtecilik ve...',
    ImgRight: '/ct-btc-right.png',
    bg: '#F6E9DC',
    activeExpert: 154,
    choose: 'NFT, Borsalar, Blockchain, Dao, GameFi',
    Link: '/Crypto',
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
    choose: 'Altcoin, Blockchain, Kriptografi, DeFi, Metaverse',
    Link: '',
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
    activeExpert: 0,
    choose: 'Altcoin, Blockchain, Kriptografi, DeFi, Metaverse',
    Link: '',
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
    Link: '',
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
    Link: '',
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
    Link: '',
    key: 'mobile'
  }
]
