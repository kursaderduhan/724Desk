import React, { memo } from 'react'
import {
  Flex,
  FlexProps,
  Text,
  Button,
  IconButton,
  Image,
  HStack,
  Box
} from '@chakra-ui/react'
import Link from 'next/link'
import { GrLanguage } from 'react-icons/gr'
import {ChevronDownIcon} from '@chakra-ui/icons'
export const Header = () => {
  return (
    <Flex
      w={'full'}
      h={'full'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      px={5} py={5}
    >
      <Box>
        <Image
          src={'/724DeskLogo.png'}
          alt={'desk-ıcon'}
          w={'77px'}
          h={'24px'}
        />
      </Box>
      {headerText.map(header => (
        <TextHeader
          key={header.key}
          heading={header.heading}
          Link={header.Link}
        >
          {header.heading}
        </TextHeader>
      ))}
      <HStack>
        <Button variant={'headerButton'} bg={"light.100"} color={'dark.100'}>
          Giriş Yap
        </Button>
        <Button variant={'headerButton'} bg={'dark.200'} color={'light.100'}>
          Kayıt Ol
        </Button>
        <Button aria-label='language' leftIcon={<GrLanguage />} rightIcon={<ChevronDownIcon/>} bg={"transparent"} _hover={{opacity:0.8}}>TR</Button>
      </HStack>
    </Flex>
  )
}

export default memo(Header)

interface headerProp {
  heading: string
  Link: string
  key: string
}

const headerText: Array<headerProp> = [
  { heading: 'Ana Sayfa', Link: '/', key: 'home' },
  { heading: 'Servisler & Çözümler', Link: '/SerAndSol', key: 'result' },
  { heading: 'Nasıl Kullanılır?', Link: 'HowToUse', key: 'use' },
  { heading: 'Bilgi Bankası', Link: 'DataBase', key: 'bank' },
  { heading: 'Uzmanlar İçin', Link: 'Experts', key: 'expert' }
]

interface headProp extends FlexProps {
  heading: string
  Link: string
}

const TextHeader = ({ ...rest }: headProp) => {
  return (
    <Link href={rest.Link}>
      <Text cursor={'pointer'} textStyle={'headerText'} color={'dark.100'}>
        {rest.heading}
      </Text>
    </Link>
  )
}
