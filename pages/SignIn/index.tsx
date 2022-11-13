import React, { memo, useState } from 'react'
import {
  VStack,
  HStack,
  Text,
  Input,
  Image,
  Button,
  InputGroup,
  FormLabel,
  Flex,
  Divider,
  ButtonGroup
} from '@chakra-ui/react'
import Link from 'next/link'
import { useStorken } from '@data/storken'
export const SignIn = () => {
  const [userChoose, setUserChoose] = useState<any>("Kullanıcı Adı")
  const pagesName = useStorken<any>('pagesName')
  const [buttonColor,setButtonColor] = useState<number>(1)
  const change = (id:number) => {
    setButtonColor(id)
  } 
  return (
    <Flex w={'full'} minH={'100vh'} alignItems={'center'}>
      <VStack w={'583px'} justifyContent={'center'} align={'center'} h={'full'}>
        <VStack alignItems={'flex-start'} pos={"relative"}>
          <Image
            src={'/724Desk-soft.png'}
            w={'76,88px'}
            h={'24px'}
            alt={'deskIcon'}
          />
          <Text fontSize={'28px'} fontWeight={500} color={'#333333'} textStyle={"signInHead"} pt={"21px"}>
            724Desk Hesap Girişi
          </Text>
          <Flex flexDirection={'column'}>
            <Text fontWeight={500} textStyle={"homePageSubText"} color={'#525252'} pt={"42px"}>
              Giriş yönteminizi seçin
            </Text>
            <HStack w={'full'} bg={'#D0DDE7'} rounded={5} mt={"8px"}>
              <ButtonGroup>
                {buttons.map(item => (
                <Button bg={buttonColor === item.id ? '#2C4EC6' : "transparent"} w={'75px'}  key={item.id} onClick={() => change(item.id)} _hover={{opacity:0.8}}>
                  <Image
                    src={item.image}
                    alt={'ımg'} bg={"transparent"}
                    w={'24px'}
                    h={'24px'}
                  />
                </Button>
                ))}
              </ButtonGroup>
            </HStack>
          </Flex>
          {choose.filter(itemText => itemText.id === buttonColor).map(items => (
            <Flex key={items.id} flexDirection={"column"}>
          <Text
            fontWeight={500} pt={"42px"}
            color={'#525252'} textStyle={"categoriesText"}
          >
            {items.textHead}
          </Text>
          <InputGroup flexDirection={'column'}>
            <FormLabel>
              <Text textStyle={"categoriesText"} color={'#525252'} pt={"16px"}>
                {items.choose}
              </Text>
            </FormLabel>
            <Input placeholder={''} _placeholder={{fontsize:"12px"}} type={items.id === 1 ? "text" : "number"} bg={'#F1F9FE'} mt={"4px"} />
          </InputGroup>
          </Flex>
          ))}
          <Link href={'/'}>
            <Button
              bg={'#2C4EC6'}
              color={'white'}
              gap={2} w={"116px"} h={"36px"}
              fontSize={'13px'}
              fontWeight={500}
              _hover={{ opacity: 0.8 }}
              onClick={() => pagesName.set('Ana Sayfa')} pos={"absolute"} top={"410px"} 
            >
              <Image src={'/lock.png'} alt={'lock'} w={'18px'} h={'18px'} />
              Giriş Yap
            </Button>
          </Link>
          <HStack w={'full'} pt={"141px"}>
            <Divider h={"1px"} bg={"#D4D4D4"} />
            <Text alignSelf={'center'} color={"#D4D4D4"} textStyle={"categoriesText"}>Yada</Text>
            <Divider  h={"1px"} bg={"#D4D4D4"}/>
          </HStack>
          <HStack w={'full'} justifyContent={'space-between'} pt={"63px"}>
            <Image src={'/signUp-google.png'} alt={''} w={'42px'} h={'42px'} />
            <Image
              src={'/signUp-facebook.png'}
              alt={''}
              w={'42px'}
              h={'42px'}
            />
            <Image
              src={'/signUp-Instagram.png'}
              alt={''}
              w={'42px'}
              h={'42px'}
            />
            <Image src={'/signUp-sky.png'} alt={''} w={'42px'} h={'42px'} />
          </HStack>
          <Text
            bg={'transparent'}
             textStyle={"categoriesText"} pt={"52px"}
            _hover={{ opacity: 0.8 }} lineHeight={"18px"} letterSpacing={"0.4px"}
            cursor={'pointer'} color={"#2485E8"}
          >
            Şifremi unuttum
          </Text>
          <Text  textStyle={"categoriesText"} color={"#959595"}>
            Henüz kayıt olmadın mı?
            <span style={{ color: '#2485E8' }}>
              <Link href={'/SignUp'}> Hesap Oluştur</Link>
            </span>
          </Text>
        </VStack>
      </VStack>
      <VStack
        bg={'#4F91CD'}
        minH={'100vh'}
        w={'full'}
        justifyContent={'space-between'}
        display={{ base: 'none', md: 'flex' }}
        flexDirection={'column'}
      >
        <VStack h={'full'} pt={"144px"}>
          <Text fontSize={'46px'} fontWeight={600} color={'white'} lineHeight={"69px"} fontStyle={"normal"}>
            Çözüme anında ulaş!
          </Text>
          <Text
           fontWeight={400} opacity={0.75} pt={"8px"}
            color={'white'} textStyle={"homePageText"}
            textAlign={'center'} maxW={"533px"} 
          >
            Çevrimiçi uzmanlarımızla iletişime geçerek anında destek alın.
          </Text>
        </VStack>
        <Image
          src={'/sıgnUp-man.png'}
          alt={'man'}
          w={'698px'}
          h={'510px'}
          alignSelf={'flex-end'}
          justifyContent={'flex-end'}
          alignItems={'flex-end'}
          display={'flex'}
        />
      </VStack>
    </Flex>
  )
}

export default memo(SignIn)

interface userChoose {
  textHead: string
  choose: string
  id: number
}

const choose: Array<userChoose> = [
  { textHead: 'Kullanıcı adı ile giriş', choose: 'Kullanıcı Adı', id: 1 },
  { textHead: 'Sms ile giriş', choose: 'Sms', id: 2 },
  { textHead: 'Telefon numarası ile giriş', choose: 'Telefon Numarası', id: 3 },
  { textHead: '2Fa onayı ile giriş', choose: '2fa Şifresi', id: 4 }
]

interface buttonProps {
  id:number
  image: string
}

const buttons:Array<buttonProps> = [
  {id: 1,image:"/signUp-profile.png"},
  {id: 2,image:"/signUp-sms.png"},
  {id: 3,image:"/signUp-call.png"},
  {id: 4,image:"/signUp-mobile.png"},
]