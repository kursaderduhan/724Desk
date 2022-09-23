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
  List
} from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box bgImage={'/footerBg.png'} h={'500px'} pos={'relative'} w={'full'}>
      <Box
        bgImage={'/footerLogo.png'}
        pos={'absolute'}
        bottom={225}
        left={250}
        justifyContent={'center'}
        w={'full'}
        display={'flex'}
        alignSelf={'center'}
        zIndex={1}
        bgSize={'cover'}
        h={'full'}
        boxSize={'xl'}
      />
      <VStack>
        <HStack
          w={'full'}
          h={'full'}
          px={'125px'}
          py={'100px'}
          justifyContent={'space-between'}
        >
          <VStack alignItems={'flex-start'} gap={20} alignSelf={'flex-start'}>
            <Box>
              <Image
                src={'/724Desk.png'}
                alt={'724Desk'}
                w={'134px'}
                h={'42px'}
              />
              <Text fontWeight={400} fontSize={'12px'} color={'#D4D4D4'}>
                7/24 Desk Support Solution sizin için en iyi <br /> çözümleri
                sunar.
              </Text>
            </Box>
            <Box>
              <Text fontSize={'13px'} fontWeight={500} color={'white'}>
                Bizi takip edin
              </Text>
              <HStack>
                <Image
                  src={'/facebook.png'}
                  alt={'ımg'}
                  w={'24px'}
                  h={'24px'}
                />
                <Image
                  src={'/instagram.png'}
                  alt={'ımg'}
                  w={'24px'}
                  h={'24px'}
                />
                <Image src={'/twitter.png'} alt={'ımg'} w={'24px'} h={'24px'} />
                <Image src={'/linkedn.png'} alt={'ımg'} w={'24px'} h={'24px'} />
              </HStack>
            </Box>
          </VStack>
          <HStack
            gap={20}
            fontSize={'15px'}
            color={'white'}
            fontWeight={400}
            alignSelf={'flex-start'}
          >
            <VStack h={'full'}>
              <List spacing={2}>
                <ListItem>Ana Sayfa</ListItem>
                <ListItem>Hizmetler & Çözümler</ListItem>
                <ListItem>Nasıl Kullanılır?</ListItem>
                <ListItem>Değerlendirmeler</ListItem>
                <ListItem>Hakkımızda</ListItem>
                <ListItem>İletişim</ListItem>
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
            <VStack>
              <List spacing={2}>
                <ListItem>Sunucu Yönetimi</ListItem>
                <ListItem>Yazılım Geliştirme</ListItem>
                <ListItem>Network</ListItem>
                <ListItem>Siber Güvenlik</ListItem>
                <ListItem>Desk Token</ListItem>
                <ListItem>Referans Programı</ListItem>
              </List>
            </VStack>
          </HStack>
        </HStack>
        <HStack w={'full'} justifyContent={'center'} cursor={'pointer'}>
          <Image src={'/footerImg.png'} alt={'ımg'} w={'647px'} h={'32px'} />
        </HStack>
        <Text fontSize={'12px'} fontWeight={400} color={'#D4D4D4'}>
          Copyright © 724desk.com
        </Text>
      </VStack>
    </Box>
  )
}

export default memo(Footer)
