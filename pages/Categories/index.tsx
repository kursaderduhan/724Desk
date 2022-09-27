import React from 'react'
import {
  Flex,
  Text,
  HStack,
  VStack,
  Image,
  Box,
  Container,
  IconButton,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '@components/Layout/Layout'
import { SearchIcon } from '@chakra-ui/icons'
import Link from 'next/link'
export const Categories = () => {
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
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Kategoriler
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
      <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
        <SimpleGrid w={'full'} columns={3} spacing={10} py={10}>
          {categories.map(categories => (
            <Link href={categories.Link} key={categories.key}>
              <Box
                cursor={'pointer'}
                w={'389px'}
                h={'328px'}
                bg={categories.bg}
                rounded={15}
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
                    <Text fontSize={'23px'} fontWeight={500}>
                      {categories.TextHead}
                    </Text>
                    <Text fontSize={'12px'} fontWeight={400}>
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
                      <Text color={categories.online ? 'gray' : '#56C568'}>
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
                      <Text fontSize={'12px'} fontWeight={400}>
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
      </Container>
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
