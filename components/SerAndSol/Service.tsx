import React, { memo } from 'react'
import {
  Flex,
  HStack,
  VStack,
  Image,
  Text,
  Container,
  Button,
  Divider,
  SimpleGrid
} from '@chakra-ui/react'
export const Service = () => {
  return (
    <Flex bg={'#333862'} h={'full'}>
      <VStack w={'full'}>
        <HStack bg={'#272B53'} w={'full'} h={'311px'} mt={'100px'}>
          <Container maxW={'1200px'}>
            <HStack w={'full'} justifyContent={'space-around'} py={'72px'}>
              <VStack>
                <HStack gap={'12px'}>
                  <Image src={'/flag.png'} alt={'flag'} w={'54px'} h={'54px'} />
                  <Text color={'white'} textStyle={'bigText'}>
                    33
                  </Text>
                  <Text
                    textStyle={'homePageSubText'}
                    color={'#959595'}
                    opacity={0.8}
                  >
                    ülke
                  </Text>
                </HStack>
                <Text color={'#EAEAEA'} textStyle={'deskTokenHead'} pt={'28px'}>
                  Birçok farklı ülkeden uzmanlara sahibiz
                </Text>
                <Text
                  color={'#D4D4D4'}
                  textStyle={'subText'}
                  maxW={'454px'}
                  textAlign={'center'}
                  pt={'12px'}
                >
                  Size çok yakınız, aynı zaman diliminde her zaman yanınızdayız.
                </Text>
              </VStack>
              <Divider
                orientation='vertical'
                bg={'white'}
                border={'1px solid'}
                borderColor={'#525575'}
                h={'227px'}
              />
              <VStack>
                <HStack gap={'12px'}>
                  <Image
                    src={'/global-refresh.png'}
                    alt={'global'}
                    w={'54px'}
                    h={'54px'}
                  />
                  <Text color={'white'} textStyle={'bigText'}>
                    42
                  </Text>
                  <Text
                    textStyle={'homePageSubText'}
                    color={'#959595'}
                    opacity={0.8}
                  >
                    Dil
                  </Text>
                </HStack>
                <Text color={'#EAEAEA'} textStyle={'deskTokenHead'} pt={'28px'}>
                  Bİrçok dilde hizmet vermekteyiz
                </Text>
                <Text
                  color={'#D4D4D4'}
                  textStyle={'subText'}
                  maxW={'454px'}
                  textAlign={'center'}
                  pt={'12px'}
                >
                  Sizi anlıyoruz, çünkü aynı dili konuşuyoruz. Size destek
                  oluyoruz, çünkü hedeflerimiz aynı.
                </Text>
              </VStack>
            </HStack>
          </Container>
        </HStack>
        <Container maxW={'1200px'}>
          <VStack pt={'100px'} pb={'150px'}>
            <Flex flexDirection={'column'} alignItems={'flex-start'} w={'full'}>
              <Text color={'white'} textStyle={'deskTokenHead'}>
                Birçok farklı iletişim kanalından hizmet sunmaktayız
              </Text>
              <Text color={'#D4D4D4'} textStyle={'subText'} pt={'12px'}>
                Sizin sahip olduğunuz iletişim kanalları aracılığıyla iletişim
                kuruyoruz. sahip olduğunuz iletişim kanalları aracılığıyla
                iletişim kuruyoruz.
              </Text>
            </Flex>
            <SimpleGrid
              w={'full'}
              h={'full'}
              columns={3}
              pt={'80px'}
              gridRowGap={'77px'}
              gridColumnGap={'144px'}
            >
              {item.map(items => (
                <VStack
                  h={'full'}
                  gap={10}
                  key={items.id}
                  alignItems={'flex-start'}
                >
                  <Flex flexDirection={'column'}>
                    <Image src={items.image} alt={''} w='54px' h={'54px'} />
                    <Text
                      color={'white'}
                      pt={'12px'}
                      textStyle={'homePageText'}
                    >
                      {items.itemHead}
                    </Text>
                    <Text
                      textStyle={'categoriesText'}
                      color={'#C4C4C4'}
                      maxW={'288px'}
                      pt={'8px'}
                    >
                      {items.itemDesc}
                    </Text>
                  </Flex>
                </VStack>
              ))}
            </SimpleGrid>
            <Button
              fontSize={'13px'}
              top={'50px'}
              fontWeight={500}
              color={'white'}
              lineHeight={'20px'}
              letterSpacing={'0.5px'}
              border={'1px solid'}
              borderColor={'white'}
              _hover={{ opacity: 0.8 }}
              bg={'transparent'}
              alignSelf={'flex-start'}
              w='195px'
              h={'36px'}
              rounded={'5px'}
            >
              Daha Fazla Bilgi
            </Button>
          </VStack>
        </Container>
      </VStack>
    </Flex>
  )
}

export default memo(Service)

interface itemProps {
  id: number
  image: string
  itemHead: string
  itemDesc: string
}

const item: Array<itemProps> = [
  {
    id: 0,
    image: '/phone-1.png',
    itemHead: 'Telefon',
    itemDesc:
      'Telefon numaranız aracılığıyla uzmanlarımız size ulaşarak gerekli desteği sağlayacaktır.'
  },
  {
    id: 1,
    image: '/messages.png',
    itemHead: 'Anlık Mesajlaşma',
    itemDesc:
      'Whatsapp, Telegram ve Signal gibi kanallar aracılığıyla destek alabilir, bizimle iletişime geçebilirsiniz.'
  },
  {
    id: 2,
    image: '/video.png',
    itemHead: 'Görüntülü Görüşme',
    itemDesc: 'Uzmanlarımızla görüntülü görüşerek sorunlarınızı çözebilirsiniz.'
  },
  {
    id: 3,
    image: '/global.png',
    itemHead: 'Canlı Sohbet',
    itemDesc:
      'Canlı sohbet aracılığıyla eş zamanlı olarak uzmanlarımızdan destek alabilirsiniz.'
  },
  {
    id: 4,
    image: '/global.png',
    itemHead: 'E-Posta',
    itemDesc:
      ' E-posta yoluyla bize iletişim kurup sorunlarınızı çözebilirsiniz.'
  },
  {
    id: 5,
    image: '/global.png',
    itemHead: '724 Desk Uygulaması',
    itemDesc:
      'Web uygulamamız üzerinden bize ulaşıp destek talebinde bulunarak çözüm sürecinizi takip edebilirsiniz.'
  }
]
