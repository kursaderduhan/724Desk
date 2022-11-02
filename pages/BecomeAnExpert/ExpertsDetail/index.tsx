import React from 'react'
import {
  VStack,
  HStack,
  Container,
  Text,
  Flex,
  InputGroup,
  FormLabel,
  Input,
  Button,
  Select,
  Checkbox,
  Textarea
} from '@chakra-ui/react'
import Layout from '@components/Layout/Layout'
import Footer from '@components/Footer/Footer'
const ExpertsDetail = () => {
  return (
    <Layout>
      <VStack
        h={'196px'}
        bg={'#E5EDF4'}
        alignSelf={'flex-end'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        gap={5}
        py={10}
        display={{ base: 'none', md: 'flex' }}
      >
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Hemen Uzman Olun
          </Text>
          <Text fontSize={'12px'} fontWeight={400} color={'#959595'}>
            Uzman olmak için aşağıdaki formu doldurun ve hemen başvuru yapın!
          </Text>
        </Container>
      </VStack>
      <Flex justifyContent={'center'} py={10} flexDirection={'column'} gap={10}>
        <Container maxW={'800px'}>
          <VStack alignItems={'flex-start'} gap={2} px={5} >
            <Text
              fontSize={'23px'}
              fontWeight={500}
              color={'#333333'}
              alignSelf={'flex-start'}
            >
              Hemen Uzman Olun
            </Text>
            <Text fontSize={'15px'} fontWeight={400} color={'#959595'}>
              Uzman olmak için aşağıdaki formu doldurun ve hemen başvuru yapın!
            </Text>
            <Flex
              alignItems={'center'}
              flexDirection={{ base: 'column', md: 'row' }}
              alignSelf={'center'}
              gap={2}
            >
              <InputGroup
                flexDirection={'column'}
                w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Ad Soyad</FormLabel>
                <Input placeholder={'Fatih Demirkan'} />
              </InputGroup>
              <InputGroup
                flexDirection={'column'}
               w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Doğum Tarihi</FormLabel>
                <Input placeholder={'örn. 07/06/1996'} />
              </InputGroup>
            </Flex>
            <Flex
              alignItems={'center'}
              flexDirection={{ base: 'column', md: 'row' }}
              alignSelf={'center'}
              gap={2}
            >
              <InputGroup
                flexDirection={'column'}
                w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Telefon Numarası</FormLabel>
                <Input placeholder={'örn. +90 534 936 3296'} />
              </InputGroup>
              <InputGroup
                flexDirection={'column'}
               w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Adres</FormLabel>
                <Input placeholder={'Adres'} />
              </InputGroup>
            </Flex>
            <Flex
              alignItems={'center'}
              flexDirection={{ base: 'column', md: 'row' }}
              alignSelf={'center'}
              gap={2}
            >
              <InputGroup
                flexDirection={'column'}
               w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Zaman Dilimi</FormLabel>
                <Input placeholder={'Zaman Dilimi'} />
              </InputGroup>
              <InputGroup
                flexDirection={'column'}
                w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Kategori</FormLabel>
                <Select placeholder='Kategori'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputGroup>
            </Flex>
            <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              alignSelf={'center'}
              gap={2}
            >
              <InputGroup
                flexDirection={'column'}
                w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Sosyal Medya Hesapları</FormLabel>
                <Input placeholder={'Sosyal Medya Hesapları'} />
              </InputGroup>
              <InputGroup
                flexDirection={'column'}
               w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Ana Dil</FormLabel>
                <Select placeholder='Ana Dil'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
                <Checkbox>Bu dilde destek vermek ister misin?</Checkbox>
              </InputGroup>
            </Flex>
            <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              alignSelf={'center'}
              gap={2}
            >
              <InputGroup
                flexDirection={'column'}
                w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Uzmanlık Alanı</FormLabel>
                <Select placeholder='Uzmanlık Alanı'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputGroup>
              <InputGroup
                flexDirection={'column'}
                w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Uzmanlık Derecesi</FormLabel>
                <Select placeholder='Uzmanlık Derecesi'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputGroup>
            </Flex>
            <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              alignSelf={'center'}
              gap={2}
            >
              <InputGroup
                flexDirection={'column'}
              w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>İkinci Dil</FormLabel>
                <Select placeholder='İkinci Dil'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
                <Checkbox>Bu dilde destek vermek ister misin?</Checkbox>
              </InputGroup>
              <InputGroup
                flexDirection={'column'}
                w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Uzmanlık Derecesi</FormLabel>
                <Select placeholder='Uzmanlık Derecesi'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputGroup>
            </Flex>
            <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              alignSelf={'center'}
              gap={2}
            >
              <InputGroup
                flexDirection={'column'}
                w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Bilinen Diller</FormLabel>
                <Select placeholder='Bilinen Diller'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputGroup>
            </Flex>
            <InputGroup flexDirection={"column"} w={{ base: '343px', md: 'full' }}>
              <FormLabel>Açıklama</FormLabel>
              <Textarea></Textarea>
            </InputGroup>
            <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              alignSelf={'center'}
              gap={2}
            >
              <InputGroup
                flexDirection={'column'}
              w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Sertifikalar</FormLabel>
                <Select placeholder='Sertifikalar'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputGroup>
              <InputGroup
                flexDirection={'column'}
                w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Kategori</FormLabel>
                <Select placeholder='Kategori'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputGroup>
            </Flex>
            <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              alignSelf={'center'}
              gap={2}
            >
              <InputGroup
                flexDirection={'column'}
                w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Diğer Sertifikalar</FormLabel>
                <Select placeholder='Sertifikalar'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputGroup>
              <InputGroup
                flexDirection={'column'}
               w={{ base: '343px', md: '389px' }}
              >
                <FormLabel>Kategori</FormLabel>
                <Select placeholder='Kategori'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputGroup>
            </Flex>
            <VStack>
              <Text>Lütfen Uzmanlığınızı Anlatın</Text>
              <Text>
                Uzmanlığınızı en iyi şekilde anlatarak kendinizi tanıtmış
                olacaksınız.
              </Text>
              <InputGroup w={{ base: '343px', md: 'full' }} flexDirection={"column"}>
                <FormLabel>Açıklama</FormLabel>
                <Textarea></Textarea>
              </InputGroup>
            </VStack>
            <VStack>
              <Text>Çalışmak İstediğiniz Zaman Periyodunu Belirleyin</Text>
              <Text>
                Sizden destek alacak kişiler için kendi zaman periyodunuzu
                belirleyin ve o zaman diliminde destek olun.
              </Text>
              <InputGroup w={{ base: '343px', md: 'full' }}>
                <Text>Bu alana işaretleme kutusu gelecek</Text>
                          </InputGroup>
                          <Flex>
              <Button bg={'blue'} color={'white'}>
                Save
              </Button>
              <Button>Cancel</Button></Flex>
            </VStack>
            <VStack>
              <Text>Destek Vereceğiniz İletişim Kanalını Seçin</Text>
              <Text>
                Hangi kanallardan destek vereceğinizi seçerek bu yollardan
                destek sağlayın.
              </Text>
              <InputGroup w={{ base: '343px', md: '389px' }}>
                <FormLabel>Destek Adresleri</FormLabel>
                <Select placeholder='Destek Adresleri'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputGroup>
            </VStack>
            <VStack>
              <Text>Tavsiyelerinizi Belirtin</Text>
              <Text>Varsa referans numaranızı girin.</Text>
              <InputGroup w={{ base: '343px', md: '389px' }} flexDirection={"column"}>
                <FormLabel>Referans Numarası</FormLabel>
                <Select placeholder='Destek Adresleri'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputGroup>
            </VStack>
            <Checkbox>
              I agree <span style={{color:"blue"}}>Expert agreement</span>
            </Checkbox>
            <Button
              variant={'globalButton'}
              w={{ base: '343px', md: '200px' }}
              alignSelf={'center'}
            >
              Gönder
            </Button>
          </VStack>
          <Footer />
        </Container>
      </Flex>
    </Layout>
  )
}

export default ExpertsDetail
