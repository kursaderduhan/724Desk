import React, { memo } from 'react'
import {
  HStack,
  VStack,
  Text,
  Image,
  Flex,
  Box,
  Container,
  SimpleGrid
} from '@chakra-ui/react'
import Link from 'next/link'
export const DataBase = () => {
  return (
    <Flex w={'full'} h={'full'} flexDirection={'column'} py={50}>
      <VStack py={50}>
        <Container maxW={"1200px"}>
          <Text
            fontSize={'23px'}
            fontWeight={500}
            color={'#525252'}
            alignSelf={'flex-start'}
          >
            724DESK Bilgi Bankası
          </Text>
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            w={'full'}
            justifyContent={'space-between'}
            px={0}
            alignItems={{ base: 'center' }}
          >
            <Link href={'/DataBase'}>
              <Image
                src={'/DataBase-Img.png'}
                alt={'ımg'}
                w={{ base: '343px', md: '491px' }}
                h={{ base: '192px', md: '276px' }}
                cursor={'pointer'}
              />
            </Link>
            <VStack alignItems={'flex-start'}>
              <Text
                fontWeight={500}
                fontSize={{ base: '19px', md: '33px' }}
                color={'#333333'}
              >
                İşte Dev Balinaların En Çok Trade Et...
              </Text>
              <Text
                color={'#666666'}
                fontSize={'14px'}
                fontWeight={400}
                maxW={{ base: 'full', md: '655px' }}
              >
                Curve DAO Token (CRV), Livepeer (LPT) ve birkaç altcoin
                projesinde devasa balina satın alımlarına şahit oldu. Balinalar
                CRV’yi en çok kullanılan akıllı sözleşmeler listesinde de ilk
                sıralara çıkardı.
                <br />
                WhaleStates’e göre, “BlueWhale0088” adlı bir ETH balinası, 2.13
                milyon dolar değerinde CRV stokladı. Balina sadece iki işlemde
                824.000 CRV satın aldı ve piyasaya düşerken...
              </Text>
              <Text fontSize={'12px'} color={'#666666'} fontWeight={400}>
                12/04/2022
              </Text>
            </VStack>
          </Flex>
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            w={'full'}
            py={{ base: 5, md: 50 }}
            justifyContent={'center'}
            alignItems={'center'}
            gap={5}
          >
            {Item.map(items => (
              <Box
                key={items.Key}
                w={{ base: '164px', md: '288px' }}
                h={'162px'}
                bgImage={items.Image}
                bgPos={'center'}
                bgSize={'cover'}
                display={'flex'}
                py={5}
                rounded={10}
              >
                <Text
                  fontSize={'15px'}
                  fontWeight={500}
                  alignSelf={'flex-end'}
                  w={'full'}
                  display={'flex'}
                  justifyContent={'center'}
                  color={'white'}
                >
                  {items.Text}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </VStack>
      <VStack w={'full'} py={{ base: 5, md: 50 }}>
        <HStack w={'full'} display={'flex'} alignSelf={'flex-end'}>
          <HStack
            w={'full'}
            h={'full'}
            justifyContent={'flex-end'}
            pos={'relative'}
          >
            <Flex
              zIndex={1}
              pos={{ base: 'initial', md: 'absolute' }}
              justifyContent={{ base: 'center', md: 'flex-start' }}
              pl={{ base: '', md: '200px' }}
              alignItems={'flex-start'}
              w={'full'}
            >
              <Image
                src={'/DataBaseWomen.png'}
                alt={'women'}
                w={{ base: '324px', md: '624px' }}
                h={{ base: '326px', md: '630px' }}
                zIndex={1}
                display={'flex'}
              />
            </Flex>

            <HStack
              bgImage={'/DataBase-bg.png'}
              w={'1075px'}
              h={'491px'}
              justifyContent={'center'}
              borderLeftRadius={'full'}
              display={{ base: 'none', md: 'flex' }}
            >
              <HStack w={'480px'}>
                <Image
                  src={'/message-question.png'}
                  alt={'question'}
                  w={'45px'}
                  h={'43px'}
                  alignSelf={'flex-start'}
                />
                <VStack alignItems={'flex-start'}>
                  <Text fontWeight={500} fontSize={'23px'} color={'white'}>
                    Bizi neden seçmelisiniz?
                  </Text>
                  <Text fontSize={'14px'} fontWeight={400} color={'#D4D4D4'}>
                    Sizi anlıyoruz, çünkü aynı dili konuşuyoruz. Sizinle
                    birlikteyiz, çünkü aynı yerde yaşıyoruz. Size destek
                    oluyoruz, çünkü aynı kanalları kullanıyoruz...
                  </Text>
                  <HStack gap={4}>
                    <HStack
                      bg={'#555A8A'}
                      w={'249px'}
                      h={'86px'}
                      justifyContent={'center'}
                      rounded={10}
                    >
                      <Image
                        src={'/flag.png'}
                        alt={'flag'}
                        w={'54px'}
                        h={'54px'}
                      />
                      <Text fontWeight={500} fontSize={'33px'} color={'white'}>
                        33
                      </Text>
                      <Text
                        fontWeight={400}
                        fontSize={'15px'}
                        color={'#D4D4D4'}
                      >
                        ülke
                      </Text>
                    </HStack>

                    <HStack
                      bg={'#555A8A'}
                      w={'249px'}
                      h={'86px'}
                      justifyContent={'center'}
                      rounded={10}
                    >
                      <Image
                        src={'/global-refresh.png'}
                        alt={'global'}
                        w={'54px'}
                        h={'54px'}
                      />
                      <Text fontWeight={500} fontSize={'33px'} color={'white'}>
                        42
                      </Text>
                      <Text
                        fontWeight={400}
                        fontSize={'15px'}
                        color={'#D4D4D4'}
                      >
                        Dil
                      </Text>
                    </HStack>
                  </HStack>
                  <HStack bg={'#555A8A'} w={'522px'} h={'99px'} rounded={10}>
                    <VStack w={'full'}>
                      <Image
                        src={'/hpIcons.png'}
                        alt={'icons'}
                        w={'288px'}
                        h={'32px'}
                      />
                      <Text
                        fontSize={'15px'}
                        color={'#D4D4D4'}
                        fontWeight={400}
                      >
                        Birçok kanal
                      </Text>
                    </VStack>
                  </HStack>
                </VStack>
              </HStack>
            </HStack>
          </HStack>
        </HStack>
      </VStack>
      <VStack>
        <Container maxW={'1200px'}>
          <Text
            fontWeight={500}
            fontSize={'23px'}
            color={'#525252'}
            alignSelf={'flex-start'}
          >
            Destek Kanalları
          </Text>
        </Container>
        <Flex
          gap='1'
          w={'full'}
          pl={{ base: '', md: '175' }}
          px={2}
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: '-ms-autohiding-scrollbar'
          }}
        >
          {categories.map(categories => (
            <Box
              key={categories.key}
              w={{ base: '164px', md: '288px' }}
              h={{ base: '125px', md: '223px' }}
              bg={categories.bg}
              rounded={15}
              style={{
                flex: '0 0 auto',
                flexWrap: 'nowrap'
              }}
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
                  <Text
                    fontSize={{ base: '15px', md: '23px' }}
                    fontWeight={500}
                  >
                    {categories.TextHead}
                  </Text>
                  <Text
                    fontSize={'12px'}
                    fontWeight={400}
                    display={{ base: 'none', md: 'flex' }}
                  >
                    {categories.Description}
                  </Text>
                </VStack>
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
                    w={{ base: '72px', md: '133px' }}
                    h={{ base: '72px', md: '133px' }}
                    p={2}
                  />
                </Box>
              </HStack>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Flex>
  )
}

export default memo(DataBase)

interface itemProp {
  Image: string
  Text: string
  Key: string
}

const Item: Array<itemProp> = [
  {
    Image: '/DataBase-1.png',
    Text: 'Snoop Dogg’tan The SandBox...',
    Key: 'one'
  },
  {
    Image: '/DataBase-2.png',
    Text: 'Ünlü Şirket, Bu Altcoin Projesin...',
    Key: 'two'
  },
  {
    Image: '/DataBase-3.png',
    Text: 'Son Bir Haftada En Çok Yükselen...',
    Key: 'three'
  },
  {
    Image: '/DataBase-4.png',
    Text: 'Binance Bu Altcoin’e Yatırım Yap...',
    Key: 'four'
  }
]

interface categoriesProp {
  ImgLeft: string
  TextHead: string
  Description: string
  ImgRight: string
  online?: string
  bg: string
  key: string
}

const categories: Array<categoriesProp> = [
  {
    ImgLeft: '/ımg-l-1.png',
    TextHead: 'Telefon',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit est morbi hac vestibulum id ac amet sed vulputate. Nunc a sed mattis morbi at.',
    ImgRight: '/ımg-r-1.png',
    bg: '#FFFBEE',
    key: 'phone'
  },
  {
    ImgLeft: '/ımg-l-2.png',
    TextHead: 'Anlık Mesajlaşma',
    Description:
      'Whatsapp, Telegram ve Signal gibi kanallardan destek alabilir veya iletişime geçebilirsiniz.',
    ImgRight: '/ımg-r-2.png',
    bg: '#FFFBEE',
    key: 'message'
  },
  {
    ImgLeft: '/ımg-l-3.png',
    TextHead: 'Görüntülü Görüşme',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit est morbi hac vestibulum id ac amet sed vulputate. Nunc a sed mattis morbi at.',
    ImgRight: '/ımg-r-3.png',
    bg: '#FFFBEE',
    key: 'görüntülü'
  },
  {
    ImgLeft: '/ımg-l-4.png',
    TextHead: 'Canlı Sohbet',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit est morbi hac vestibulum id ac amet sed vulputate. Nunc a sed mattis morbi at.',
    ImgRight: '/ımg-r-4.png',
    bg: '#FFFBEE',
    key: 'sohbet'
  },
  {
    ImgLeft: '/ımg-l-4.png',
    TextHead: 'E-Posta',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit est morbi hac vestibulum id ac amet sed vulputate. Nunc a sed mattis morbi at.',
    ImgRight: '/ımg-r-4.png',
    bg: '#FFFBEE',
    key: 'e-posta'
  }
]