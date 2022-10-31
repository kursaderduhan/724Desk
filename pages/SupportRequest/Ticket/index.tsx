import React, { memo, useState } from 'react'
import Layout from '@components/Layout/Layout'
import {
  HStack,
  Flex,
  Text,
  Container,
  VStack,
  InputGroup,
  Input,
  FormLabel,
  Textarea,
  Select,
  Checkbox,
  Button
} from '@chakra-ui/react'
import Link from 'next/link'
import Footer from '@components/Footer/Footer'

export const Ticket = () => {
  const [less, setLess] = useState<string>('none')
  return (
    <Layout>
      <HStack
        h={'196px'}
        bg={'#E5EDF4'}
        flexDirection={'column'}
        alignSelf={'flex-end'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        gap={5}
        py={10}
        display={{ base: 'none', md: 'flex' }}
      >
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <Text
            fontSize={'19px'}
            fontWeight={500}
            color={'#333333'}
            cursor={'default'}
          >
            Arama Sonuçları
          </Text>
          <Text
            fontSize={'12px'}
            fontWeight={400}
            color={'#959595'}
            cursor={'default'}
          >
            Aradığınız anahtar kelime ile ilgili sonuçlara ulaşabilirsiniz.
          </Text>
        </Container>
      </HStack>
      <VStack py={50} justifyContent={'center'} bg={'#F7FCFE'}>
        <VStack
          alignItems={'flex-start'}
          w={{ base: '343px', md: '800px' }}
          gap={{ base: 3, md: 10 }}
        >
          <Flex flexDirection={'column'}>
            <Text
              fontSize={{ base: '19px', md: '23px' }}
              fontWeight={500}
              color={'#333333'}
            >
              “Trade yapmak” ile ilgili makale sonuçları
            </Text>
            <Text
              fontSize={{ base: '12px', md: '15px' }}
              fontWeight={400}
              color={'#959595'}
            >
              Bu anahtar kelime ile ilgili arama sonucu bulunamamıştır.
            </Text>
          </Flex>
          <Flex flexDirection={'column'}>
            <Text
              fontSize={{ base: '19px', md: '23px' }}
              fontWeight={500}
              color={'#333333'}
            >
              Ticket Oluştur
            </Text>
            <Text
              fontSize={{ base: '12px', md: '15px' }}
              fontWeight={400}
              color={'#959595'}
            >
              İletişim bilgilerinizi yazın, biz size dönüş yapalım.
            </Text>
          </Flex>
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={'center'}
            justifyContent={'space-between'}
            w={{ base: '343px', md: 'full' }}
            gap={2}
          >
            <InputGroup flexDirection={'column'}>
              <FormLabel fontSize={'12px'}>Konu Başlığı</FormLabel>
              <Input
                placeholder='örn. Telefonumu açamıyorum'
                fontSize={'14px'}
                type={'text'}
              />
            </InputGroup>
            <InputGroup flexDirection={'column'}>
              <FormLabel fontSize={'12px'}>E-mail</FormLabel>
              <Input
                placeholder='örn. fdemirkan4@gmail.com'
                fontSize={'14px'}
                type={'email'}
              />
            </InputGroup>
          </Flex>
          <Flex flexDirection={'column'} w={'full'}>
            <FormLabel fontSize='12px'>Açıklama</FormLabel>
            <Textarea
              placeholder='örn. Merhaba, doge coin hakkında bilgi almak istiyorum, lütfen dönüş yapar mısınız?'
              size='sm'
              resize={'none'}
            />
          </Flex>
          <Flex flexDirection={'column'} display={less} w={'full'}>
            <HStack w={'full'} py={2}>
              <InputGroup flexDirection={'column'}>
                <FormLabel fontSize='12px'>Kategori</FormLabel>
                <Select placeholder='Kategori seçin'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputGroup>
              <InputGroup flexDirection={'column'}>
                <FormLabel fontSize='12px'>İletişim Tipi</FormLabel>
                <Select placeholder='Whatsapp' color={'black'}>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputGroup>
            </HStack>
            <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              w={'full'}
              py={2}
            >
              <InputGroup flexDirection={'column'}>
                <FormLabel fontSize='12px'>Destek Zamanı</FormLabel>
                <Input
                  placeholder='Pzt. 12:00-17:00, Tue. 08:00-12:00...'
                  type={'datetime-local'}
                ></Input>
              </InputGroup>
              <HStack w={'full'}>
                <InputGroup flexDirection={'column'}>
                  <FormLabel fontSize='12px'>Zaman Dilimi</FormLabel>
                  <Input placeholder='GMT + 1' type={'search'}></Input>
                </InputGroup>
                <InputGroup flexDirection={'column'}>
                  <FormLabel fontSize='12px'>Yaklaşık Çözüm Süreci</FormLabel>
                  <Select placeholder='3-5 saat'>
                    <option value='option1'>1-2 saat</option>
                    <option value='option2'>8-10 saat</option>
                    <option value='option3'>12-24 saat</option>
                  </Select>
                </InputGroup>
              </HStack>
            </Flex>
            <HStack w={'full'} py={2}>
              <InputGroup flexDirection={'column'}>
                <FormLabel fontSize='12px'>Öncelik Durumu</FormLabel>
                <Select placeholder='Acil'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                </Select>
              </InputGroup>
              <InputGroup flexDirection={'column'}>
                <FormLabel fontSize='12px'>Destek Dili</FormLabel>
                <Select placeholder='Destek dili seçin'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                </Select>
              </InputGroup>
            </HStack>
            <InputGroup
              flexDirection={'column'}
              w={{ base: '100%', md: '50%' }}
              py={2}
            >
              <FormLabel fontSize='12px'>Ses Dosyası (İsteğe bağlı)</FormLabel>
              <Input type={'file'} placeholder='Record-abddaa-1'></Input>
            </InputGroup>
          </Flex>
          <Checkbox color={'#525252'}>
            I agree <span style={{ color: '#2485E8' }}> User agreement</span>
          </Checkbox>
          <Text
            fontSize={'12px'}
            fontWeight={400}
            color={'#2485E8'}
            cursor={'pointer'}
            onClick={() => setLess(less === 'none' ? '' : 'none')}
          >
            {less === 'none' ? 'Daha fazla seçenek' : 'Daha az seçenek'}
          </Text>
          <Link href={'/'}>
            <Button
              variant={'globalButton'}
              w={{ base: '343px', md: '136px' }}
              fontSize={'13px'}
            >
              Gönder
            </Button>
          </Link>
        </VStack>
        <Footer />
      </VStack>
    </Layout>
  )
}

export default Ticket
