import React, { memo } from 'react'
import {
  Flex,
  FlexProps,
  Text,
  Button,
  Image,
  HStack,
  Box,
  Menu,
  MenuButton,
  MenuList,
  Icon
} from '@chakra-ui/react'
import Link from 'next/link'
import { GrLanguage } from 'react-icons/gr'
import { ChevronDownIcon } from '@chakra-ui/icons'
import LanguageButton from '@components/Header/LanguageButton'
export const Header = () => {
  return (
    <Flex
      w={'full'}
      h={'full'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      px={5}
      py={5}
    >
      <Box w={"100px"}>
        <Image
          src={'/724DeskLogo.png'}
          alt={'desk-ıcon'}
          w={'77px'}
          h={'24px'}
        />
      </Box>
      <HStack w={"full"} pl={100} gap={10}>
      {headerText.map(header => (
        <TextHeader
          key={header.key}
          heading={header.heading}
          Link={header.Link} bg={"red"}
        >
        </TextHeader>
      ))}
        </HStack>
      <HStack>
        <Button variant={'headerButton'} bg={'light.100'} color={'dark.100'}>
          Giriş Yap
        </Button>
        <Button variant={'headerButton'} bg={'dark.200'} color={'light.100'}>
          Kayıt Ol
        </Button>
        <Menu>
          <MenuButton
            aria-label='language'
            bg={'transparent'}
            leftIcon={<GrLanguage />}
            rightIcon={<ChevronDownIcon />}
            _hover={{ opacity: 0.8, bg: 'transparent' }}
            alignItems={'center'}
            as={Button}
            _active={{ bg: 'transparent' }}
          >
            TR
          </MenuButton>
          <MenuList bg={'#FFFFFF'} boxShadow={'2xl'}>
            <LanguageButton />
          </MenuList>
        </Menu>
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
      <Text cursor={'pointer'} textStyle={'headerText'}  >
        {rest.heading}
      </Text>
    </Link>
  )
}
