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
  Circle,
  Container
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
    <Flex h={'full'} alignItems={'center'} p={{base:"0px",lg:"24px"}} w={'100%'}>
      {size.width! > screen.MOBILE_SIZE && (
        <Flex w={'100%'} alignItems={"center"}>
          <Flex w={'full'} maxW={"77px"}>
            <Image
              src={'/724DeskLogo.png'}
              alt={'desk-ıcon'}
              w={'77px'}
              h={'24px'}
            />
          </Flex>
          
          <Flex alignItems={"center"} pl={"32px"} gap={"24px"} w={"100%"} justifyContent={"flex-start"}>
            {headerText.map(header => (
              <Link href={header.Link} key={header.key}>
                <Text
                  cursor={'pointer'} 
                  textStyle={'headerText'}
                  color={headerProp ? 'white' : '#333333'}
                >
                  {header.heading}
                </Text>
              </Link>
            ))}
            </Flex>
            
          <HStack display={'flex'} justifyContent={'flex-end'}>
            <Link href={'/SignIn'}>
              <Button
                variant={'headerButton'}
                bg={'light.100'}
                color={'dark.100'} w={"98px"} h={"37px"}
              >
                Giriş Yap
              </Button>
            </Link>
            <Link href={'/SignUp'}>
              <Button
                variant={'headerButton'}
                bg={'dark.200'}
                color={'light.100'} w={"88px"} h={"37px"}
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
                _active={{ bg: 'transparent' }} textStyle={"homePageSubText"}
                color={headerProp ? 'white' : '#333333'}
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
  const [pagesName,setPagesName] = useStorken<any>('pagesName')
  const changePagesName = (heading: any) => {
    setPagesName.set(heading)
  }

  return (
    <Flex w={'100%'}>
      <Accordion
        allowMultiple
        w={'100%'} 
        styleConfig={{
          baseStyle: {
            width: '100%'
          }
        }}
      >
        <AccordionItem border={'none'} w={'100%'} h={"76px"} >
          {({ isExpanded }) => (
            <>
              <Flex
                alignItems={'center'}
                w={'100%'}
                justifyContent={'space-between'}
                h={"100%"} px={5}
              >
                <Box w={'100%'}>
                  {pagesName.v == 'Ana Sayfa' ? (
                    <Image
                      src={'/724DeskLogo.png'}
                      alt={'desk-ıcon'}
                      w={'77px'}
                      h={'24px'}
                    />
                  ) : (
                    <Text fontSize={'15px'} fontWeight={500} color={'#333333'} lineHeight={"22.5px"} letterSpacing={"0.15px"} fontStyle={"normal"}>
                      {pagesName.v}
                    </Text>
                  )}
                </Box>
                <AccordionButton
                  w={'40px'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  {isExpanded ? (
                    <Circle border={'1px solid gray'} overflow={'hidden'}>
                      <Icon as={CloseIcon} />
                    </Circle>
                  ) : (
                    <Icon as={HamburgerIcon} boxSize={"24px"} />
                  )}
                </AccordionButton>
              </Flex>
              <AccordionPanel w={'100%'} >
                <Flex w={'100%'} flexDirection={'column'}>
                  <VStack
                    h={'238px'}
                    w={'100%'}
                    bg={'#2269B1'}
                    justifyContent={'center'}
                    gap={5}
                  >
                    <Link href={'/SignIn'}>
                      <Button
                        variant={'headerButton'} bg={"#F27C00"} color={"white"}
                        w={'237px'} h={"37px"}
                        onClick={() => pagesName.set('Kayıt ol')}
                      >
                        Kayıt Ol
                      </Button>
                    </Link>
                    <HStack gap={1}>
                      <Link href={'/ForExperts'}>
                        <Button
                          variant={'headerButton'}
                          bg={'transparent'}
                          color={'light.100'} borderColor={"rgba(255, 255, 255, 0.2)"}
                          w={'111px'} h={"37px"}
                          onClick={() => pagesName.set('Uzmanlar İçin')}
                        >
                          Uzmanlar İçin
                        </Button>
                      </Link>
                      <Link href={'/SignUp'}>
                        <Button
                          variant={'headerButton'}
                          bg={'transparent'}
                          color={'light.100'} 
                          w={'111px'} h={"37px"} borderColor={"rgba(255, 255, 255, 0.2)"}
                          onClick={() => pagesName.set('Giriş Yap')}
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
                    gap={"24px"}
                    py={10}
                    px={"24px"}
                  >
                    {headerTextMobile.map(header => (
                      <Link href={header.Link} key={header.key}>
                        <Text
                          cursor={'pointer'} textStyle={"headerText"} color={"#333333"}
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
