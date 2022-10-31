import React, { memo } from 'react'
import {
  Flex,
  Text,
  Button,
  Image,
  HStack,
  Box,
  Menu,
  MenuButton,
  MenuList,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  VStack,
  Circle
} from '@chakra-ui/react'
import Link from 'next/link'
import { GrLanguage } from 'react-icons/gr'
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import LanguageButton from '@components/Header/LanguageButton'
import screen from '../../constants'
import useWindowSize from 'hooks/useWindowSize'
import { useStorken } from '@data/storken'

interface Size {
  width: number | undefined
  height: number | undefined
}

export const Header = ({ headerProp = false }: { headerProp?: boolean }) => {
  const size: Size = useWindowSize()
  return (
    <Flex h={'full'} alignItems={'center'} p={5} w={'100%'}>
      {size.width! > screen.MOBILE_SIZE && (
        <Flex w={'100%'}>
          <Flex w={'100px'}>
            <Image
              src={'/724DeskLogo.png'}
              alt={'desk-ıcon'}
              w={'77px'}
              h={'24px'}
            />
          </Flex>
          <HStack w={'full'} pl={100} gap={10}>
            {headerText.map(header => (
              <Link href={header.Link} key={header.key}>
                <Text
                  cursor={'pointer'}
                  textStyle={'headerText'}
                  color={headerProp ? 'white' : 'gray'}
                >
                  {header.heading}
                </Text>
              </Link>
            ))}
          </HStack>
          <HStack display={'flex'} justifyContent={'flex-end'} w={'full'}>
            <Link href={'/SignUp'}>
              <Button
                variant={'headerButton'}
                bg={'light.100'}
                color={'dark.100'}
              >
                Giriş Yap
              </Button>
            </Link>
            <Link href={'/SignIn'}>
              <Button
                variant={'headerButton'}
                bg={'dark.200'}
                color={'light.100'}
              >
                Kayıt Ol
              </Button>
            </Link>
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
                color={headerProp ? 'white' : 'black'}
              >
                TR
              </MenuButton>
              <MenuList bg={'#FFFFFF'} boxShadow={'2xl'}>
                <LanguageButton />
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      )}
      {size.width! < screen.MOBILE_SIZE && <MobileHeader />}
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
  { heading: 'Nasıl Kullanılır?', Link: '/HowToUse', key: 'use' },
  { heading: 'Bilgi Bankası', Link: '/DataBase', key: 'bank' },
  { heading: 'Uzmanlar İçin', Link: '/ForExperts', key: 'expert' }
]

const MobileHeader = () => {
  const pagesName = useStorken<any>('pagesName')
  const changePagesName = (heading: any) => {
    pagesName.set(heading)
  }

  return (
    <Flex w={'100%'}>
      <Accordion allowMultiple w={'100%'}>
        <AccordionItem border={'none'} w={'100%'}>
          {({ isExpanded }) => (
            <>
              <h2>
                <Flex
                  alignItems={'center'}
                  w={'full'}
                  justifyContent={'space-between'}
                  px={5}
                >
                  <Box w={'full'}>
                    {pagesName.v == 'Ana Sayfa' ? (
                      <Image
                        src={'/724DeskLogo.png'}
                        alt={'desk-ıcon'}
                        w={'77px'}
                        h={'24px'}
                      />
                    ) : (
                      <Text
                        fontSize={'15px'}
                        fontWeight={500}
                        color={'#333333'}
                      >
                        {pagesName.v}
                      </Text>
                    )}
                  </Box>
                  <AccordionButton
                    alignSelf={'flex-end'}
                    w={'40px'}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    {isExpanded ? (
                      <Circle border={'1px solid gray'} overflow={'hidden'}>
                        <Icon as={CloseIcon} />
                      </Circle>
                    ) : (
                      <Icon as={HamburgerIcon} />
                    )}
                  </AccordionButton>
                </Flex>
              </h2>
              <AccordionPanel w={'100%'}>
                <Flex w={'100%'} flexDirection={'column'}>
                  <VStack
                    h={'238px'}
                    w={'100%'}
                    bg={'#2269B1'}
                    justifyContent={'center'}
                    gap={5}
                  >
                    <Link href={'/SignIn'}>
                      <Button variant={'globalButton'} w={'237px'} onClick={() => pagesName.set("Kayıt ol")}>
                        Kayıt Ol
                      </Button>
                    </Link>
                    <HStack gap={1}>
                      <Link href={'/ForExperts'}>
                        <Button
                          variant={'headerButton'}
                          bg={'transparent'}
                          color={'light.100'}
                          w={'111px'} onClick={() => pagesName.set("Uzmanlar İçin")}
                        >
                          Uzmanlar İçin
                        </Button>
                      </Link>
                      <Link href={'/SignUp'}>
                        <Button
                          variant={'headerButton'}
                          bg={'transparent'}
                          color={'light.100'}
                          w={'111px'} onClick={() => pagesName.set("Giriş Yap")}
                        >
                          Giriş Yap
                        </Button>
                      </Link>
                    </HStack>
                  </VStack>
                  <VStack
                    bg={'white'}
                    alignItems={'flex-start'}
                    w={'full'}
                    gap={5}
                    py={10}
                    px={5}
                  >
                    {headerTextMobile.map(header => (
                      <Link href={header.Link} key={header.key}>
                        <Text
                          fontSize={'14px'}
                          fontWeight={400}
                          color={'#333333'}
                          cursor={'pointer'}
                          onClick={() => changePagesName(header.heading)}
                        >
                          {header.heading}
                        </Text>
                      </Link>
                    ))}
                    {/* <MenuList bg={'#FFFFFF'} boxShadow={'2xl'}> */}
                    {/* <LanguageButton /> */}
                    {/* </MenuList> */}
                  </VStack>
                </Flex>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Flex>
  )
}

const headerTextMobile: Array<headerProp> = [
  { heading: 'Ana Sayfa', Link: '/', key: 'home' },
  { heading: 'Servisler & Çözümler', Link: '/SerAndSol', key: 'result' },
  { heading: 'Nasıl Kullanılır?', Link: '/HowToUse', key: 'use' },
  { heading: 'Uzmanlar', Link: '/Experts', key: 'experts' },
  { heading: 'Blog', Link: '/DataBase', key: 'blog' },
  { heading: 'Fiyat Listesi', Link: '/PriceList', key: 'priceList' }
]
