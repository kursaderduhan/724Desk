import React, { memo } from 'react'
import {
  Flex,
  Box,
  HStack,
  VStack,
  Image,
  Text,
  ListItem,
  List,
  Container,
  Center,
  SimpleGrid
} from '@chakra-ui/react'
import Link from 'next/link'
import { useStorken } from '@data/storken'
export const Footer = ({ HomePage = false }: { HomePage?: boolean }) => {
  const pagesName = useStorken<any>('pagesName')
  // const infoPage = useStorken<any>('infoPage')
  return (
    <Box
      bgImage={HomePage ? '/footerBg.png' : '#E5E5E5'}
      h={{ base: '967px', md: '500px' }}
      pos={'relative'}
      w={'full'}
    >
      {HomePage && (
        <Box
          bgImage={'/footerLogo.png'}
          pos={'absolute'}
          bottom={225}
          left={{ lg: 400, xl: 400, xxl: 600 }}
          justifyContent={'center'}
          w={'full'}
          display={{ base: 'none', md: 'flex' }}
          alignSelf={'center'}
          zIndex={1}
          bgSize={'cover'}
          h={'full'}
          boxSize={'xl'}
        />
      )}
      <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
        <VStack py={HomePage ? 0 : 0} gap={10}>
          <Flex
            w={'full'}
            h={'full'}
            py={{ base: '20px', md: '80px' }}
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent={'space-between'}
            gap={10}
          >
            <VStack
              alignItems={'flex-start'}
              gap={{ base: 2, md: 20 }}
              alignSelf={'flex-start'}
            >
              <Box>
                <Image
                  src={HomePage ? '/724Desk.png' : '/724Desk-soft.png'}
                  alt={'724Desk'}
                  w={'134px'}
                  h={'42px'}
                />
                <Text
                  fontWeight={400}
                  fontSize={'12px'}
                  color={HomePage ? '#D4D4D4' : '#959595'}
                  py={5}
                >
                  7/24 Desk Support Solution sizin için en iyi çözümleri sunar.
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize={'13px'}
                  fontWeight={500}
                  color={HomePage ? 'white' : '#959595'}
                >
                  Bizi takip edin
                </Text>
                <HStack>
                  <Image
                    src={HomePage ? '/facebook.png' : '/facebook-soft.png'}
                    alt={'ımg'}
                    w={'24px'}
                    h={'24px'}
                    color={HomePage ? '' : '#959595'}
                  />
                  <Image
                    src={HomePage ? '/instagram.png' : '/instagram-soft.png'}
                    alt={'ımg'}
                    w={'24px'}
                    h={'24px'}
                  />
                  <Image
                    src={HomePage ? '/twitter.png' : '/twitter-soft.png'}
                    alt={'ımg'}
                    w={'24px'}
                    h={'24px'}
                  />
                  <Image
                    src={HomePage ? '/linkedn.png' : '/linkedn-soft.png'}
                    alt={'ımg'}
                    w={'24px'}
                    h={'24px'}
                  />
                </HStack>
              </Box>
            </VStack>
            <SimpleGrid
              columns={{ base: 2, md: 3 }}
              gap={{ base: 10, md: 20 }}
              fontSize={'15px'}
              color={HomePage ? 'white' : '#959595'}
              fontWeight={400}
              w={HomePage ? '' : 'full'}
              justifyContent={{ base: 'flex-start', md: 'space-evenly' }}
              alignSelf={'flex-start'}
              alignItems={'flex-start'}
            >
              <VStack h={'full'}>
                <List spacing={2}>
                  <Link href={'/'}>
                    <ListItem
                      cursor={'pointer'}
                      onClick={() => pagesName.set('Ana Sayfa')}
                    >
                      Ana Sayfa
                    </ListItem>
                  </Link>
                  <Link href={'/SerAndSol'}>
                    <ListItem
                      cursor={'pointer'}
                      onClick={() => pagesName.set('Servisler & Çözümler')}
                    >
                      Hizmetler & Çözümler
                    </ListItem>
                  </Link>
                  <Link href={'/HowToUse'}>
                    <ListItem
                      cursor={'pointer'}
                      onClick={() => pagesName.set('Nasıl Kullanılır')}
                    >
                      Nasıl Kullanılır?
                    </ListItem>
                  </Link>
                  <ListItem>Değerlendirmeler</ListItem>
                  <Link href={'/Info'}>
                    <ListItem
                      cursor={'pointer'}
                      onClick={() => pagesName.set('Info')}
                    >
                      Hakkımızda
                    </ListItem>
                  </Link>
                  <Link href={'/Contact'}>
                    <ListItem
                      cursor={'pointer'}
                      onClick={() => pagesName.set('Contact')}
                    >
                      İletişim
                    </ListItem>
                  </Link>
                  <Link href={'/SignUp'}>
                    <ListItem cursor={'pointer'}>Kayıt Ol</ListItem>
                  </Link>
                </List>
              </VStack>
              <VStack>
                <List spacing={2}>
                  <ListItem>SSS</ListItem>
                  <Link href={'/DataBase'}>
                    <ListItem
                      cursor={'pointer'}
                      onClick={() => pagesName.set('Blog')}
                    >
                      Blog
                    </ListItem>
                  </Link>
                  <ListItem>Kariyer</ListItem>
                  <Link href={'/ForExperts'}>
                    <ListItem
                      cursor={'pointer'}
                      onClick={() => pagesName.set('Uzmanlar')}
                    >
                      Uzmanlar
                    </ListItem>
                  </Link>
                  <ListItem>Gizlilik Politikası</ListItem>
                  <ListItem>Kullanım Koşulları</ListItem>
                  <ListItem>Site Haritası</ListItem>
                </List>
              </VStack>
              <VStack alignItems={'flex-start'}>
                <List spacing={2}>
                  {ListData.map((item, index) => {
                    return (
                      <Link href={'/Info/' + item.link} key={index}>
                        <ListItem key={index} cursor={'pointer'}>
                          {item.name}
                        </ListItem>
                      </Link>
                    )
                  })}
                </List>
              </VStack>
            </SimpleGrid>
          </Flex>
          <Center>
            <SimpleGrid
              columns={{ base: 4, md: 8 }}
              w={'full'}
              justifyContent={'center'}
              gap={5}
              alignItems={'center'}
            >
              <Image
                src={HomePage ? '/visa-logo.png' : '/visa-blue.png'}
                alt={'ımg'}
                w={'49px'}
                h={'15px'}
              />
              <Image
                src={'/Mastercard.png'}
                alt={'ımg'}
                w={'45px'}
                h={'28px'}
              />
              <Image
                src={HomePage ? '/GooglePay.png' : '/GooglePay-blue.png'}
                alt={'ımg'}
                w={'50px'}
                h={'21px'}
              />
              <Image
                src={HomePage ? '/ApplePay.png' : 'ApplePay-gray.png'}
                alt={'ımg'}
                w={'50px'}
                h={'21px'}
              />
              <Image src={'/PayPal.png'} alt={'ımg'} w={'22px'} h={'27px'} />
              <Image src={'/Skrill.png'} alt={'ımg'} w={'50px'} h={'17px'} />
              <Image
                src={HomePage ? '/Payoneer.png' : '/Payoneer-gray.png'}
                alt={'ımg'}
                w={'55px'}
                h={'20px'}
              />
              <Image src={'/Bitcoin.png'} alt={'ımg'} w={'32px'} h={'32px'} />
            </SimpleGrid>
          </Center>
          <Text fontSize={'12px'} fontWeight={400} color={'#D4D4D4'}>
            Copyright © 724desk.com
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default memo(Footer)

export const ListData = [
  {
    id: 0,
    name: 'Sunucu Yönetimi',
    link: 'SunucuYonetimi',
    detail:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet '
  },
  {
    id: 1,
    name: 'Yazılım Geliştirme',
    link: 'YazilimGelistirme',
    detail:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet '
  },
  {
    id: 2,
    name: 'Network',
    link: 'Network',
    detail:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet '
  },
  {
    id: 3,
    name: 'Siber Güvenlik',
    link: 'SiberGuvenlik',
    detail:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet '
  },
  {
    id: 4,
    name: 'Desk Token',
    link: 'DeskToken',
    detail:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet '
  },
  {
    id: 5,
    name: 'Referans Programı',
    link: 'Reference',
    detail:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet '
  }
]