import React, { memo } from 'react'
import {
  Flex,
  Box,
  HStack,
  VStack,
  Image,
  Text,
  UnorderedList,
  ListItem,
  List,
  Container,
  Center,
  SimpleGrid
} from '@chakra-ui/react'
import Link from 'next/link'

export const Footer = ({ HomePage = false }: { HomePage?: boolean }) => {
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
            justifyContent={'space-between'} gap={10}
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
              gap={{base:10,md:20}}
              fontSize={'15px'}
              color={HomePage ? 'white' : '#959595'}
              fontWeight={400}
              w={HomePage ? '' : 'full'}
              justifyContent={{base:"flex-start",md:'space-evenly'}}
              alignSelf={'flex-start'}
              alignItems={'flex-start'}
            >
              <VStack h={'full'}>
                <List spacing={2}>
                  <ListItem>Ana Sayfa</ListItem>
                  <ListItem>Hizmetler & Çözümler</ListItem>
                  <ListItem>Nasıl Kullanılır?</ListItem>
                  <ListItem>Değerlendirmeler</ListItem>
                  <Link href={'/Info'}>
                    <ListItem cursor={'pointer'}>Hakkımızda</ListItem>
                  </Link>
                  <Link href={'/Contact'}>
                    <ListItem cursor={'pointer'}>İletişim</ListItem>
                  </Link>
                  <ListItem>Kayıt Ol</ListItem>
                </List>
              </VStack>
              <VStack>
                <List spacing={2}>
                  <ListItem>SSS</ListItem>
                  <ListItem>Blog</ListItem>
                  <ListItem>Kariyer</ListItem>
                  <ListItem>Uzmanlar</ListItem>
                  <ListItem>Gizlilik Politikası</ListItem>
                  <ListItem>Kullanım Koşulları</ListItem>
                  <ListItem>Site Haritası</ListItem>
                </List>
              </VStack>
              <VStack alignItems={"flex-start"}>
                <List spacing={2}>
                  <ListItem>Sunucu Yönetimi</ListItem>
                  <ListItem>Yazılım Geliştirme</ListItem>
                  <ListItem>Network</ListItem>
                  <ListItem>Siber Güvenlik</ListItem>
                  <ListItem>Desk Token</ListItem>
                  <Link href={'/Reference'}>
                    <ListItem cursor={'pointer'}>Referans Programı</ListItem>
                  </Link>
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
            >
              <Image src={'/visa-logo.png'} alt={'ımg'} w={'49px'} h={'15px'} />
              <Image
                src={'/Mastercard.png'}
                alt={'ımg'}
                w={'45px'}
                h={'28px'}
              />
              <Image src={'/GooglePay.png'} alt={'ımg'} w={'50px'} h={'21px'} />
              <Image src={'/ApplePay.png'} alt={'ımg'} w={'50px'} h={'21px'} />
              <Image src={'/PayPal.png'} alt={'ımg'} w={'22px'} h={'27px'} />
              <Image src={'/Skrill.png'} alt={'ımg'} w={'50px'} h={'17px'} />
              <Image src={'/Payoneer.png'} alt={'ımg'} w={'55px'} h={'20px'} />
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
