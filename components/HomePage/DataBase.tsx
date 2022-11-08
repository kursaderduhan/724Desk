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
    <Flex w={'full'} h={'full'} flexDirection={'column'} py={{base:"82px",lg:"120px"}}>
      <VStack >
        <Container maxW={"1200px"}>
          <Text
            textStyle={"deskTokenHead"}
            color={'#525252'}
            alignSelf={'flex-start'}
          >
            724DESK Bilgi Bankası
          </Text>
          <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            w={'full'}
            justifyContent={'space-between'}
            px={0} pt={{ base: "24px", lg: "32px" }}
            alignItems={{ base: 'center' }} gap={{base:"24px",lg:"54px"}}
          >
            <Link href={'/DataBase'}>
              <Image
                src={'/DataBase-Img.png'}
                alt={'ımg'}
                w={{ base: '343px', lg: '491px' }}
                h={{ base: '192px', lg: '276px' }}
                cursor={'pointer'}
              />
            </Link>
            <VStack alignItems={'flex-start'}>
              <Text
                fontWeight={500}
                fontSize={{ base: '19px', lg: '33px' }}
                color={'#333333'} letterSpacing={"0.25px"} lineHeight={"50px"} fontStyle={"normal"}
              >
                İşte Dev Balinaların En Çok Trade Et...
              </Text>
              <Text
                color={'#666666'}
                fontWeight={400} textStyle={"subText"}
                maxW={{ base: 'full', lg: '655px' }}
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
              <Text fontSize={'12px'} color={'#666666'} fontWeight={400} lineHeight={"150%"} letterSpacing={"0.25px"} fontStyle={"normal"}>
                12/04/2022
              </Text>
            </VStack>
          </Flex>
          <SimpleGrid
            columns={{ base: 2, lg: 4 }}
            w={'full'}
            py={{ base: 5, lg: 50 }}
            justifyContent={'center'}
            alignItems={'center'}
            gap={5}
          >
            {Item.map(items => (
              <Box
                key={items.Key}
                w={{ base: '164px', lg: '288px' }}
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
                  w={'full'} lineHeight={"22px"} letterSpacing={"0.15px"}
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
      <VStack w={'full'} pt={{ base: 5, lg: "172px" }} pb={"118px"}>
        <HStack w={'full'} display={'flex'} alignSelf={'flex-end'}>
          <HStack
            w={'full'}
            h={'full'}
            justifyContent={'flex-end'}
            pos={'relative'}
          >
            <Flex
              zIndex={1}
              pos={{ base: 'initial', lg: 'absolute' }}
              justifyContent={{ base: 'center', lg: 'flex-start' }}
              pl={10}
              alignItems={'flex-start'}
              w={'full'}
            >
              <Image
                src={'/DataBaseWomen.png'}
                alt={'women'}
                w={{ base: '324px', lg: '624px' }}
                h={{ base: '326px', lg: '630px' }}
                zIndex={1}
                display={'flex'}
              />
            </Flex>

            <HStack
              w={'1175px'} bg={"#333862"}
              h={'491px'}
              justifyContent={'center'} pl={230}
              borderLeftRadius={'full'}
              display={{ base: 'none', lg: 'flex' }} 
            >
              <HStack w={'480px'} pt={"93px"} mb={"40px"}>
                <Image
                  src={'/message-question.png'}
                  alt={'question'}
                  w={'45px'}
                  h={'43px'}
                  alignSelf={'flex-start'}
                />
                <VStack alignItems={'flex-start'}>
                  <Text color={'white'} textStyle={"deskTokenHead"}>
                    Bizi neden seçmelisiniz?
                  </Text>
                  <Text color={'#D4D4D4'} textStyle={"subText"}>
                    Sizi anlıyoruz, çünkü aynı dili konuşuyoruz. Sizinle
                    birlikteyiz, çünkü aynı yerde yaşıyoruz. Size destek
                    oluyoruz, çünkü aynı kanalları kullanıyoruz...
                  </Text>
                  <HStack gap={4} pt={"53px"} pb={"16px"}>
                    <HStack
                      bg={'#555A8A'}
                      w={'249px'}
                      h={'86px'} boxShadow={"2xl"}
                      justifyContent={'center'}
                      rounded={10}
                    >
                      <Image
                        src={'/flag.png'}
                        alt={'flag'}
                        w={'54px'}
                        h={'54px'}
                      />
                      <Text textStyle={"bigText"} color={'white'}>
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
                      rounded={10} boxShadow={"2xl"}
                    >
                      <Image
                        src={'/global-refresh.png'}
                        alt={'global'}
                        w={'54px'}
                        h={'54px'}
                      />
                      <Text textStyle={"bigText"} color={'white'}>
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
                  <HStack bg={'#555A8A'} w={'522px'} h={'99px'} rounded={10} boxShadow={"2xl"}>
                    <VStack w={'full'}>
                      <Image
                        src={'/hpIcons.png'}
                        alt={'icons'}
                        w={'288px'}
                        h={'32px'}
                      />
                      <Text
                        color={'#D4D4D4'}
                        textStyle={"homePageSubText"}
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
            color={'#525252'} textStyle={"deskTokenHead"}
            alignSelf={'flex-start'}
          >
            Destek Kanalları
          </Text>
        </Container>
        <Flex
          gap='24px'
          w={'full'}
          px={2} pt={{base:"24px",lg:"32px"}}
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
              w={{ base: '164px', lg: '288px' }}
              h={{ base: '125px', lg: '223px' }}
              bg={categories.bg} py={"24px"}
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
                    fontSize={{ base: '15px', lg: '19px' }}
                    fontWeight={500} textStyle={"homePageText"}
                  >
                    {categories.TextHead}
                  </Text>
                  <Text
                    textStyle={"categoriesText"}
                    display={{ base: 'none', lg: 'flex' }} color={"#666666"}
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
                    w={{ base: '72px', lg: '133px' }}
                    h={{ base: '72px', lg: '133px' }}
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
  },
  {
    ImgLeft: '/ımg-l-4.png',
    TextHead: '724 Desk Uygulaması',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit est morbi hac vestibulum id ac amet sed vulputate. Nunc a sed mattis morbi at.',
    ImgRight: '/ımg-r-4.png',
    bg: '#FFFBEE',
    key: 'e-posta'
  }
]