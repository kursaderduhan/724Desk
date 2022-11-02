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
const ExpertsDetail = () => {
  return (
    <VStack alignItems={'flex-start'} gap={2} px={5}>
      <Flex
        alignItems={'center'}
        flexDirection={{ base: 'column', md: 'row' }}
        alignSelf={'center'}
        gap={2}
      >
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
          <FormLabel>Ad Soyad</FormLabel>
          <Input placeholder={'Fatih Demirkan'} />
        </InputGroup>
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
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
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
          <FormLabel>Telefon Numarası</FormLabel>
          <Input placeholder={'örn. +90 534 936 3296'} />
        </InputGroup>
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
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
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
          <FormLabel>Zaman Dilimi</FormLabel>
          <Input placeholder={'Zaman Dilimi'} />
        </InputGroup>
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
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
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
          <FormLabel>Sosyal Medya Hesapları</FormLabel>
          <Input placeholder={'Sosyal Medya Hesapları'} />
        </InputGroup>
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
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
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
          <FormLabel>Uzmanlık Alanı</FormLabel>
          <Select placeholder='Uzmanlık Alanı'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </InputGroup>
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
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
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
          <FormLabel>İkinci Dil</FormLabel>
          <Select placeholder='İkinci Dil'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <Checkbox>Bu dilde destek vermek ister misin?</Checkbox>
        </InputGroup>
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
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
        alignSelf={'flex-start'}
        gap={2}
      >
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
          <FormLabel>Bilinen Diller</FormLabel>
          <Select placeholder='Bilinen Diller'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </InputGroup>
      </Flex>
      <InputGroup flexDirection={'column'} w={{ base: '343px', md: 'full' }}>
        <FormLabel>Açıklama</FormLabel>
        <Textarea resize={"none"} h={"283px"}></Textarea>
      </InputGroup>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        alignSelf={'center'}
        gap={2}
      >
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
          <FormLabel>Sertifikalar</FormLabel>
          <Select placeholder='Sertifikalar'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </InputGroup>
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
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
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
          <FormLabel>Diğer Sertifikalar</FormLabel>
          <Select placeholder='Sertifikalar'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </InputGroup>
        <InputGroup flexDirection={'column'} w={{ base: '343px', md: '389px' }}>
          <FormLabel>Kategori</FormLabel>
          <Select placeholder='Kategori'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </InputGroup>
      </Flex>
      <VStack alignItems={"flex-start"} gap={2}>
        <Text fontSize={"23px"} color={"#333333"} fontWeight={500}>Lütfen Uzmanlığınızı Anlatın</Text>
        <Text fontSize={"15px"} color={"#959595"} fontWeight={400}>
          Uzmanlığınızı en iyi şekilde anlatarak kendinizi tanıtmış olacaksınız.
        </Text>
        <InputGroup w={{ base: '343px', md: 'full' }} flexDirection={'column'}>
          <FormLabel>Açıklama</FormLabel>
          <Textarea resize={"none"} h={"283px"}></Textarea>
        </InputGroup>
      </VStack>
      <VStack alignItems={"flex-start"} gap={2}>
        <Text fontSize={"23px"} color={"#333333"} fontWeight={500}>Çalışmak İstediğiniz Zaman Periyodunu Belirleyin</Text>
        <Text fontSize={"15px"} color={"#959595"} fontWeight={400}>
          Sizden destek alacak kişiler için kendi zaman periyodunuzu belirleyin
          ve o zaman diliminde destek olun.
        </Text>
        <InputGroup w={{ base: '343px', md: 'full' }} h={"283px"}>
          <Text>Bu alana işaretleme kutusu gelecek</Text>
        </InputGroup>
        <Flex alignItems={{base:"center",md:"flex-start"}} w={"full"} gap={5}>
          <Button bg={'#2C4EC6'} color={'white'} w={"86px"}>
            Save
          </Button>
          <Button color={"#959595"} bg={"transparent"} borderColor={"#959595"} border={"1px solid"}>Cancel</Button>
        </Flex>
      </VStack>
      <VStack alignItems={"flex-start"} gap={2}>
        <Text fontSize={"23px"} color={"#333333"} fontWeight={500}>Destek Vereceğiniz İletişim Kanalını Seçin</Text>
        <Text fontSize={"15px"} color={"#959595"} fontWeight={400}>
          Hangi kanallardan destek vereceğinizi seçerek bu yollardan destek
          sağlayın.
        </Text>
        <InputGroup w={{ base: '343px', md: '389px' }} flexDirection={"column"} alignSelf={"flex-start"}>
          <FormLabel>Destek Adresleri</FormLabel>
          <Select placeholder='Destek Adresleri'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </InputGroup>
      </VStack>
      <VStack alignItems={"flex-start"} gap={2}>
        <Text fontSize={"23px"} color={"#333333"} fontWeight={500}>Tavsiyelerinizi Belirtin</Text>
        <Text fontSize={"15px"} color={"#959595"} fontWeight={400}>Varsa referans numaranızı girin.</Text>
        <InputGroup w={{ base: '343px', md: '389px' }} flexDirection={'column'}>
          <FormLabel>Referans Numarası</FormLabel>
          <Select placeholder='Destek Adresleri'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </InputGroup>
      </VStack>
      <Checkbox>
        I agree <span style={{ color: 'blue' }}>Expert agreement</span>
      </Checkbox>
    </VStack>
  )
}

export default ExpertsDetail
