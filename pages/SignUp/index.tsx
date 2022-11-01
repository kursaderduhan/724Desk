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
export const SignUp = () => {
  const [userChoose, setUserChoose] = useState<any>()
  const pagesName = useStorken<any>('pagesName')

  return (
    <Flex w={'full'} minH={'100vh'} alignItems={'center'}>
      <VStack w={'583px'} justifyContent={'center'} align={'center'} h={'full'}>
        <VStack alignItems={'flex-start'} gap={5}>
          <Image
            src={'/724Desk-soft.png'}
            w={'76,88px'}
            h={'24px'}
            alt={'deskIcon'}
          />
          <Text fontSize={'28px'} fontWeight={500} color={'#333333'}>
            724Desk Hesap Girişi
          </Text>
          <Flex flexDirection={'column'}>
            <Text fontSize={'15px'} fontWeight={500} color={'#525252'}>
              Giriş yönteminizi seçin
            </Text>
            <HStack w={'full'} bg={'#D0DDE7'} rounded={5}>
              <ButtonGroup>
                <Button bg={'#2C4EC6'} w={'75px'}>
                  <Image
                    src='/signUp-profile.png'
                    alt={'profile'}
                    w={'24px'}
                    h={'24px'}
                  />
                </Button>
                <Button bg={'transparent'} w={'75px'}>
                  <Image
                    src='/signUp-sms.png'
                    alt={'sms'}
                    w={'24px'}
                    h={'24px'}
                  />
                </Button>
                <Button bg={'transparent'} w={'75px'}>
                  <Image
                    src='/signUp-call.png'
                    alt={'call'}
                    w={'24px'}
                    h={'24px'}
                  />
                </Button>
                <Button bg={'transparent'} w={'75px'}>
                  <Image
                    src={'/signUp-mobile.png'}
                    alt={'mobile'}
                    w={'24px'}
                    h={'24px'}
                  />
                </Button>
              </ButtonGroup>
            </HStack>
          </Flex>
          <Text
            fontSize={'12px'}
            fontWeight={500}
            color={'#525252'}
            fontStyle={'normal'}
          >
            Kullanıcı adı ile giriş
          </Text>
          <InputGroup flexDirection={'column'}>
            <FormLabel>
              <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                Kullanıcı Adı
              </Text>
            </FormLabel>
            <Input placeholder={''} bg={'#F1F9FE'} />
          </InputGroup>
          <Link href={'/'}>
            <Button
              bg={'#2C4EC6'}
              color={'white'}
              gap={2}
              fontSize={'13px'}
              fontWeight={500}
              _hover={{ opacity: 0.8 }}
              onClick={() => pagesName.set('Ana Sayfa')}
            >
              <Image src={'/lock.png'} alt={'lock'} w={'18px'} h={'18px'} />
              Giriş Yap
            </Button>
          </Link>
          <HStack w={'full'}>
            <Divider />
            <Text alignSelf={'center'}>Yada</Text>
            <Divider />
          </HStack>
          <HStack w={'full'} justifyContent={'space-between'}>
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
            color={'#2485E8'}
            _hover={{ opacity: 0.8 }}
            cursor={'pointer'}
          >
            Şifremi unuttum
          </Text>
          <Text>
            Henüz kayıt olmadın mı?
            <span style={{ color: '#2485E8' }}>
              <Link href={''}>Hesap Oluştur</Link>
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
        <VStack h={'full'} pt={{ xl: 50, xxl: 150 }}>
          <Text fontSize={'46px'} fontWeight={600} color={'white'}>
            Çözüme anında ulaş!
          </Text>
          <Text
            fontSize={'19px'}
            fontWeight={400}
            color={'white'}
            textAlign={'center'}
          >
            Çevrimiçi uzmanlarımızla iletişime geçerek anında <br /> destek
            alın.
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

export default memo(SignUp)

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
